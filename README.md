# Shylock.ai

**Theatrical debt collection that preserves relationships while recovering what's rightfully yours.**

🎭 *"Nothing Personal, Just Payback"*

## Live Demo

Experience Shylock.ai in action: **[https://shylock-ai.netlify.app/](https://shylock-ai.netlify.app/)**

[Video demo](https://youtu.be/kzU0UILaRXs?si=MTdSfkhhFw5vl0zs)

## What is Shylock.ai?

Shylock.ai transforms awkward debt collection into an art form. Using AI-powered voice calls with theatrical flair, it helps you recover what's owed while preserving friendships through persuasive, culturally-aware conversations.

### Key Features

- 🎭 **Theatrical Voice Personas** - Choose from The Poet, Merchant, Storyteller, or Philosopher
- 🌍 **Global Reach** - Supports 40+ languages with cultural nuances
- 🤖 **AI-Generated Scripts** - Personalized, persuasive dialogue tailored to your situation
- 📞 **Automated Calling** - Professional voice calls that won't hang up until resolved
- ⚖️ **Ethically Persistent** - Legally compliant, relationship-preserving approach

## Technical Architecture

Shylock.ai operates as a serverless automation pipeline:

### Frontend
- **Hosting**: Netlify
- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS

### Backend Automation (Make.com)
1. **Webhook Trigger**: Form submission from the website triggers a Make.com automation
2. **AI Script Generation**: Webhook sends a POST request to Nebius AI Studio to access DeepSeek V3 for generating personalized debt collection scripts
3. **Voice Synthesis**: Generated script is fed into Retell AI with ElevenLabs cloned voice technology
4. **Call Execution**: The system automatically places the call using the synthesized voice and script

### Technology Stack
- **Automation Platform**: Make.com
- **AI Model**: DeepSeek V3 (via Nebius AI Studio)
- **Voice AI**: Retell AI + ElevenLabs
- **Frontend**: React, TypeScript, Tailwind CSS
- **Deployment**: Netlify

## How It Works

1. **Enter Details** - Provide debt information, debtor details, and relationship context
2. **AI Crafts Script** - DeepSeek V3 generates a culturally-aware, persuasive script
3. **The Call is Made** - Retell AI places the call using ElevenLabs voice synthesis

## Legal Disclaimer

Shylock.ai operates within legal boundaries - we don't threaten, harass, or extort. We're simply a polite, persistent AI agent focused on ethical debt recovery while preserving relationships.

---
