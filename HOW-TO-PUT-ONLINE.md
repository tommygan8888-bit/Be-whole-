# Be Whole on your iPhone, with live voice

This folder is the whole app. Put it on any website that uses **https**, open it in Safari on your iPhone,
and add it to your Home Screen. Everything runs on the phone: the conversation engine, the voice tone
reading and the speech recognition. Nothing you say is sent anywhere.

The only downloads are the app itself (about 30 MB, first visit), the voice engine from jsDelivr, and the
speech model from Hugging Face (Small 375 MB or Base 160 MB, once, when you tap "Download voice").

## Option A: GitHub Pages (free, about 10 minutes)

1. Sign in at https://github.com (create a free account if needed).
2. Top right: **+** → **New repository**. Name it `be-whole`, choose **Public**, tick **Add a README**, click **Create**.
3. Click **Add file** → **Upload files**, then choose **all the files** in this folder (there are no
   sub-folders, so this works from an iPhone too: tap "choose your files", open the unzipped folder in Files,
   tap Select, Select All, Open). Click **Commit changes**.
4. Open **Settings** → **Pages**. Under "Branch" choose **main** and **/ (root)**, click **Save**.
5. After a minute or two the page shows your address, like `https://your-name.github.io/be-whole/`.

Note: a public repository means anyone with the address can open the app (but never your conversations,
which stay on your phone).

## Option B: Netlify Drop (no repository)

1. Go to https://app.netlify.com/drop and sign in (free).
2. Drag this whole folder onto the page. You get an `https://….netlify.app` address straight away.

## On the iPhone

1. Open the address in **Safari**.
2. Wait for "Loading Be Whole on this phone…" to finish.
3. Under **Voice on this phone**, pick the model (Small is better for Latvian) and tap **Download voice**.
   Use Wi-Fi. Keep the screen on until it says "Voice is ready".
4. Share → **Add to Home Screen**. Open Be Whole from the Home Screen from now on: iPhone keeps the
   model safely there (Safari may clear website storage that isn't used for a few weeks).
5. Tap **Talk**, allow the microphone, speak, tap **Done**.

## If something doesn't work

- **"Voice engine did not load"**: the first visit needs internet to fetch the voice engine.
- **Download stops**: tap Download voice again; finished files are kept.
- **The page closes or reloads while starting voice**: the phone ran out of memory for the Small model.
  Choose **Base** instead.
- **Speech comes out wrong**: set Language to English or Latvian instead of automatic.
- You can always type, or use the keyboard's own dictation microphone in the typing box.
