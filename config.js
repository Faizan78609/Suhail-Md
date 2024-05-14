const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923105045981";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923105045981";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923105045981";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_16_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUljZ0tuc283RzQ2UWZZL0NlMERvTVpwNktMZi9ncUtkRVVwek85QVVLND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUW5MeVZFWXdUQzJDUEZ3bm81UnF3d1wiLFxuICBcInBob25lSWRcIjogXCIzYzFkNTllMy02OTNiLTQ4YWMtOWNlNC0wZjY5NjA0NWE4ZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTQzLFxuICAgICAgMTQ1LFxuICAgICAgMTMsXG4gICAgICA2LFxuICAgICAgMTY1LFxuICAgICAgNTgsXG4gICAgICAyMDcsXG4gICAgICAzOCxcbiAgICAgIDEyNSxcbiAgICAgIDIyNCxcbiAgICAgIDg4LFxuICAgICAgMTcsXG4gICAgICAxMzMsXG4gICAgICAxODAsXG4gICAgICAxNzcsXG4gICAgICAxNTIsXG4gICAgICAxMzAsXG4gICAgICAxOTIsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA3NixcbiAgICAgIDcwLFxuICAgICAgMjQ0LFxuICAgICAgNzUsXG4gICAgICAyMyxcbiAgICAgIDUwLFxuICAgICAgMTI0LFxuICAgICAgMjcsXG4gICAgICA0MyxcbiAgICAgIDIwOSxcbiAgICAgIDcsXG4gICAgICA0OCxcbiAgICAgIDIwNSxcbiAgICAgIDEwOSxcbiAgICAgIDkyLFxuICAgICAgMjUwLFxuICAgICAgMTcwLFxuICAgICAgMTQ2LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJOTTZBQUE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDUwNDU5ODE6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTI2MDg0ODc1MTAyNTg6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJERUFEIPCfkbtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK3RxYndCRUtpZmpMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJNZnQ4ZG1kU1F1R0JQVXJ5S3VFRnJVbzZ6VmdEZURyQURyY0crM0ppQnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVIrMmJDN0RwUkpLU2tMekdmL3BmTStyMGxNaVZUK2tsQWszY2N0S3R1VUlRdGhZc1BHczRpdHpuR2h6OGlVcjNRUEtoQ2VmM3ppc2Zlcy9ZL3QrREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2Q0RnJOSkZZNHNYNENkOGdFbmtXKzd2VzBVbTJ2Z2dGYXJYZEo3aVpPYklJQnpyWVJEcFNYS3RESkdIVEtzam5qcEZONkVvVGF4SHFJRU0wZld6Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA1MDQ1OTgxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTY3MDk3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVtVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW1WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZS9PNUtXMmsrWHpCUHNaTG5lSU5iK0ozQWdmYTVSMldscGlvckhTRkU3VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozOTQ5NDIxOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "chilli",
  packname: process.env.PACK_NAME || "chilli",
  botname : process.env.BOT_NAME  || "suhail md",
  ownername:process.env.OWNER_NAME|| "chilli",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
