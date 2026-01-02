// app/api/generate-scripts/route.ts

import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `Je bent een expert TikTok content creator gespecialiseerd in recruitment video's voor Gen Z. Je maakt scripts die authentiek, engaging en platform-native zijn.

BELANGRIJKE REGELS:
- Scripts zijn 15-45 seconden (50-150 woorden)
- Geen corporate taal, wel conversational
- Hook in eerste 2 seconden
- Eén duidelijke CTA
- Geschikt voor UGC creator of medewerker om in te spreken
- Nederlandse taal, informeel (je/jij)
- Geen clichés zoals "Wij zoeken", "Ben jij?", "Unieke kans"

OUTPUT FORMAT (JSON):
{
  "scripts": [
    {
      "style": "POV | Mythbusting | Day in the Life | Behind the Scenes | Hot Take | Storytime",
      "hook": "eerste 2 seconden tekst",
      "script": "volledige script met timing [0-5s] etc",
      "visualNotes": "wat er visueel moet gebeuren",
      "cta": "call to action",
      "hashtags": ["#hashtag1", "#hashtag2"]
    }
  ]
}

Genereer altijd exact 4 unieke scripts met verschillende stijlen.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      bedrijf,
      branche,
      vacature,
      salaris,
      locatie,
      doelgroep,
      usps,
      toneOfVoice,
      vermijd,
    } = body;

    // Validatie
    if (!bedrijf || !vacature) {
      return NextResponse.json(
        { error: 'Bedrijf en vacature zijn verplicht' },
        { status: 400 }
      );
    }

    const userPrompt = `Genereer 4 TikTok recruitment scripts voor:

BEDRIJF: ${bedrijf}
BRANCHE: ${branche || 'Niet gespecificeerd'}
VACATURE: ${vacature}
SALARIS: ${salaris || 'Marktconform'}
LOCATIE: ${locatie || 'Nederland'}
DOELGROEP: ${doelgroep || '18-30 jaar'}

UNIQUE SELLING POINTS:
${usps?.map((usp: string) => `- ${usp}`).join('\n') || '- Geen specifieke USPs opgegeven'}

TONE OF VOICE: ${toneOfVoice || 'Casual en energiek'}

VERMIJD: ${vermijd || 'Corporate taal, clichés'}

Genereer 4 scripts met verschillende stijlen (POV, Mythbusting, Day in the Life, Behind the Scenes of andere passende stijlen).`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.8,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0].message.content;
    
    if (!content) {
      throw new Error('Geen response van OpenAI');
    }

    const scripts = JSON.parse(content);

    return NextResponse.json({
      success: true,
      data: scripts,
      usage: {
        promptTokens: completion.usage?.prompt_tokens,
        completionTokens: completion.usage?.completion_tokens,
        totalTokens: completion.usage?.total_tokens,
      },
    });

  } catch (error) {
    console.error('Script generation error:', error);
    
    return NextResponse.json(
      { 
        error: 'Er ging iets mis bij het genereren van scripts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
