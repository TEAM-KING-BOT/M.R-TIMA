const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALEXA π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *Owner & Founder - Timasha ( TIMA )*

π²οΈ   *Language - NODE JS*

π²οΈ   *Sponser Team - Queen Alexa Team*


       π’ *πππππππ ππππππ* π’

π *Lushen Tivanka* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *Ashan Navodya* π
β» *Co Owner*

π *Sathsara* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Sathsara* βΉ
βΉ π° *Lushen Tivanka*βΉ
βΉ π° *Ashan Navodaya*    βΉ
  
  
   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π°`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALEXAπ‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *Owner & Founder Timasha ( TIMA )*

π²οΈ   *Language - NODE JS*

π²οΈ   *Sponser Team - Queen Alexa Team*


       π’ *πππππππ ππππππ* π’

π *Lushen Tivanka* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π Ashan Navodya* π
β» *Co Owner*

π *Sathsara* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Sathsara* βΉ
βΉ π° *Lushen Tivanka*βΉ
βΉ π° *Ashan Navodya*    βΉ
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π°` })

    }));
  
  Trex.addrex({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `βΉπ₯ βπ‘οΈ ALEXA π‘οΈβ  *πππΈ π»π°π½πΊπ° π±π΄ππ π.π° π±πΎπ* π₯βΉ 

π²οΈ   *Owner & Founder - Timasha(TIMA)*

π²οΈ   *Language - NODE JS*

π²οΈ   *Sponser Team - Queen Alexa Team*


       π’ *πππππππ ππππππ* π’

π *Lushen Tivanka* π
β» *Κα΄α΄ Ι’Κα΄α΄ΚΙͺα΄ α΄α΄κ±ΙͺΙ’ΚΙ΄α΄Κ*

π *Ashan Navodya* π
β» *Co Owner*

π *Sathsara* π
β» *Admin Manger*

           π *α΄α΄α΄ΙͺΙ΄κ±* β’π

βΉ π° *Lushen Tivanka* βΉ
βΉ π° *Ashan Navodya*βΉ
βΉ π° *Sathsara*    βΉ
  
  https://api.whatsapp.com/message/STKRUWM327GCG1

   π° *κ°α΄Κ 24/7 Κα΄Κα΄ α΄κ±Ι’ α΄α΄* π° `  ,quoted: message.data})

    }));
}
