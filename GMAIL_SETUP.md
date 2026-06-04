# 📧 Gmail Notification Setup Guide

## Step 1: Enable 2-Step Verification on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Scroll down to **How you sign in to Google**
4. Click **2-Step Verification**
5. Follow the steps to enable it (you'll need your phone)

---

## Step 2: Generate an App Password

1. After enabling 2-Step Verification, go back to **Security**
2. Scroll to **How you sign in to Google**
3. Click **App passwords** (you'll only see this if 2-Step is enabled)
4. You may need to sign in again
5. In the "Select app" dropdown, choose **Mail**
6. In the "Select device" dropdown, choose **Other (Custom name)**
7. Type: `4_her_notifications`
8. Click **Generate**
9. Google shows you a **16-character password** (like: `abcd efgh ijkl mnop`)
10. **Copy this password** (remove spaces: `abcdefghijklmnop`)

---

## Step 3: Update .env.local

Open `c:\Users\NTP-IT\Desktop\4_her\.env.local` and fill in:

```env
# Your Gmail address (the one you generated the app password for)
GMAIL_USER=yourname@gmail.com

# The 16-character app password (no spaces)
GMAIL_APP_PASSWORD=abcdefghijklmnop

# Where you want to receive notifications (usually same as GMAIL_USER)
YOUR_EMAIL=yourname@gmail.com

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Example:**
```env
GMAIL_USER=john.developer@gmail.com
GMAIL_APP_PASSWORD=xmkp qwer tyui asdf
YOUR_EMAIL=john.developer@gmail.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Step 4: Restart and Test

1. **Save** `.env.local`
2. **Stop** the dev server (Ctrl+C)
3. **Restart**: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)
5. Enter a test name and start the story
6. **Check your Gmail inbox** — you should get an email!

---

## 🔒 Security Notes

- The app password is ONLY for this app (not your main Gmail password)
- You can revoke it anytime from your Google Account settings
- Never share your `.env.local` file or commit it to GitHub
- The `.gitignore` file already prevents `.env.local` from being uploaded

---

## ❓ Troubleshooting

**"Invalid credentials" error:**
- Make sure you copied the 16-character app password correctly (no spaces)
- Make sure 2-Step Verification is enabled

**"Less secure app" warning:**
- App passwords bypass this — you don't need to enable less secure apps

**Not receiving emails:**
- Check your spam/junk folder
- Make sure `YOUR_EMAIL` is correct in `.env.local`
- Check the browser console (F12) for errors

---

## ✅ You're Done!

Once configured, you'll get 7 email notifications as she reads through the story:
1. 💌 She opened the book
2. 📘 Chapter 1 started
3. 📗 Chapter 2 started
4. 📙 Chapter 3 started
5. 📕 Chapter 4 started
6. 📖 Story completed
7. 🎉 Her answer (Yes or Ask Later)
