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

## Faster and more natural voice

- **Faster understanding**: Be Whole uses several processor cores when it can. `coi-sw.js` makes that possible
  on GitHub Pages and Netlify, so keep it in the folder. If the phone ever closes the page while starting voice,
  Be Whole switches back to one core by itself. **Base** is about 3 times faster than Small; Small is better for Latvian.
- **Auto-stop**: Be Whole notices when you pause (about 2 seconds) and starts understanding straight away.
  Turn it off in your profile (the round button with your initial) → Voice and listening.
- **A more natural reading voice**: on the iPhone, Settings → Accessibility → Spoken Content (called Read & Speak
  on newer iPhones) → Voices → English, and download a voice marked **Enhanced** or **Premium** (for example Serena
  or Daniel). Then choose it in your profile → Voice and listening, and set the speed you like.

## Deeper replies with Claude (your own API key)

1. On a computer, go to https://console.anthropic.com, sign in, add a payment method under **Billing**, then
   **API keys** → **Create key**. Copy the key (it starts with `sk-ant-`). Set a monthly spend limit in the Console.
2. In Be Whole on the iPhone, on the start screen, paste it into **Deeper replies with Claude**, choose
   Sonnet 5.5 (best) or Haiku 5.5 (cheapest), and tap **Save and test**. "Connected" means it works.
3. The key stays only on this phone. It is not in the website files, so the public site never shows it.
   Tap **Forget key** to remove it. Each message (with the conversation so far) goes to Claude to write the
   reply; crisis and safety replies never do.

## Updating to a new version

Upload the new files over the old ones (same names). Usually only `index.html`, `bewhole.b64.txt` and
`coi-sw.js` change. Then close Be Whole on the iPhone (swipe it away) and open it again. The voice model and your
conversations stay on the phone.

## If something doesn't work

- **"Voice engine did not load"**: the first visit needs internet to fetch the voice engine.
- **Download stops**: tap Download voice again; finished files are kept.
- **The page closes or reloads while starting voice**: the phone ran out of memory for the Small model.
  Choose **Base** instead.
- **Speech comes out wrong**: set Language to English or Latvian instead of automatic.
- You can always type, or use the keyboard's own dictation microphone in the typing box.

## Replies written on this phone (beta)
On the first screen, "Download the reply model" puts a small language model on the phone (about 0.7 to 0.9 GB, use
Wi-Fi). After that Be Whole writes its own replies with no Claude key and nothing leaving the phone. It needs Safari on
iOS 26 or newer. It's weaker and slower than Claude; if a Claude key is saved, Claude is used instead. If it doesn't
load, close other apps (it needs about 1 GB of memory) and try again. "Remove the model from this phone" frees the space.
The first line of every conversation says who is writing the replies.

## Check which version your phone is running
- The name at the top of the app counts up with every version: **Be Whole 41**, then 42, and so on.
- The exact version (for example 0.41.0-test) is at the bottom of the welcome screen and of My profile.
- After uploading a new version, close Be Whole fully (swipe it away) and open it again. If the old number
  still shows, open the address in Safari once, pull down to refresh, then open the app again.
- The label under the icon on your home screen is fixed when you add it. To see the new number there too,
  delete the home-screen icon (your conversations stay), then in Safari tap Share → Add to Home Screen again.
