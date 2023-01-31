const { channel } = require("diagnostics_channel")
const { EmbedBuilder, ChannelType, ButtonStyle, ButtonBuilder, Events, TextInputBuilder, TextInputStyle, ModalBuilder, SelectMenuBuilder } = require("discord.js")
const { Discord, Interaction, PermissionsBitField, ActionRowBuilder, ApplicationCommandOptionType } = require("discord.js")
const ms = require("ms")
       const Enmap = require("enmap")
const { db } = require("../schemas.js/send")


        const db1 = new Enmap({
            name: 'ahmed',
            dataDir: './node_modules/enmap'

        })
module.exports = {
    name: 'ticket',
    description: 'Setup your ticket embed in your server 😘',


    run: async (client, interaction) => {

const user = interaction.user.id;


        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`لفتح تكت الاستفسار قم بالضغط على الزر`)



            .setDescription(`** من فضلك قم بالضغط على الزر لفتح تكت للحصول على رد لمشكلتك **`)
            .setTimestamp();


        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("follow")
                    .setLabel(`open ticket`)
                    .setStyle(ButtonStyle.Secondary)
            )
 db1.ensure("bergo",
    {
        Userid : [],
        Channelid : []
    }
 )

 db1.push ("bergo" , user , "Userid" )

        const mm = await interaction.reply({ embeds: [embed], components: [row] })





        const ggg = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId("close")
                    .setEmoji("🔐")
                    .setLabel(`close`)
                    .setStyle(ButtonStyle.Secondary)
            )
        const menu = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .addOptions(
                        {
                            label: `كيف احصل كود بوت الطلبات`,
                            description: "عاوز كود بوت الطلبات ياعم احصله ازاى",
                            value: `**اسمع الفيديو بتاع بوت الطلبات الدقيقة \n 10:51 \n وانت عتعرف ازاى تحصله **`,


                        },
                        {
                            label: `دليل الاشتراك`,
                            description: `مشكلة عدم الحصول على رتبة يوتيوب بالرغم من ارسال دليل الاشتراك`,
                            value: ` **قم بكتابة امر **\n \`\ اشتراك \`\ و \`\ لغة \`\ \n **واسمع الفيديو جيدا** `
                        },
                        {
                            label: `بعثت دليل اشتراك صح ولم اخذ الرتبة`,
                            description: `يا عم بعت دليل الاشتراك صح للروم وما اخذت الرتبة`,
                            value: ` ** الاجابة هى منشن لاحد من الاونرز \n Ahmed Sn او Bergo** `
                        },
                        {
                            label: `عجلة الحظ`,
                            description: `كيف العب عجلة الحظ`,
                            value: `**افتح تكت واكتب \n \`\ $s \`\ \n ومن ثم تابع مع البوت **`

                        },
                        {
                            label: `شارة المطور الجديدة`,
                            description: `كيفية الحصول على شارة المطور الجديدة `,
                            value: `**  قم بسماع هذا الفيديو جيدا https://youtu.be/Tt62TowCwmg **`,

                        },
                        {

                            label: `سيرفر يبيع حسابات كل شىء`,
                            description: " عاوز سيرفر يبيع حسابات كل شىء بالله عليك ابوس ايدك",
                            value: ` ** تفضل احلى سيرفر ك \n https://discord.gg/bskUKwgazT ** `,


                        },

                        {
                            label: "شراء حساب",
                            description: `مشكلة شريت حساب والحساب مش شغال`,
                            value: ` ** الاجابة نحن لا نمتلك اى سيرفر اخر غير الشوب**`,

                        },
                        {
                            label: `رتبة بيع او كيف اصير بائع فى السيرفر`,
                            description: `كيف اشترى رتبة بيع او كيف اصير بائع فى السيرفر`,
                            value: `** افتح تكت واكتب \n \`\ +buy \`\ \n بعد ذلك اختار رقم الرتبة التى تريد شراؤها**`,

                        },
                        {
                            label: "ملفات بوت عجلة الحظ",
                            description: "كيفية الحصول على ملفات بوت عجلة الحظ",
                            value: ` **اكتب كلمة \n \`\ عجلة \`\ \n وحول المبلغ المطلوب ** `,


                        },
                        {
                            label: `مش عارف احمل الملفات`,
                            description: "مش عارف احمل الملفات المذكورة فى الفيديو من الموقع ",
                            value: ` **الحل هو  : \n كل ما عليك هو كتابة هذا الامر \n \`\ ads \`\ و \`\ media \`\ * `,


                        },
                        {
                            label: `مشكلة فى بوت عجلة الحظ`,
                            description: "لما بشغل البوت ما بيجبلى الرابط حق رفع البوت اونلاين 24 ساعة",
                            value: ` **الحل هو : \n قم بكتابة امر \`\ ريبل \`\ \n ومن ثم طبق الكلام** `,


                        },
                        {
                            label: `عاوز اعمل اعلان`,
                            description: "عاوز تعمل اعلان لسيرفرك او قناتك او اى شىء",
                            value: ` ** قم بكتابة امر \n \`\ اعلان \`\ \n ومن ثم اختار الباقة المناسبة لك** `,


                        },
                        {
                            label: `بوت بيع حسابات`,
                            description: "عاوز بوت بيع حسابات كيف احصله الفى قناة اليوتيوب",
                            value: ` ** الاجابة هى : \n قم بكتابة امر \n \`\ سعر \`\ \n ومن ثم حول المبلغ المطلوب للحصول عليه** `,


                        },
                        {
                            label: `كيف احصل ملفات اليوتيوب`,
                            description: "مش عارف احصل ملفات اليوتيوب",
                            value: ` ** كل ما عليك هو كتابة امر \n \`\ ملفات \`\ \n ومن ثم اسمع الفيديو جيدا ** `,


                        },
                        {
                            label: `اجيت من اليوتيوب`,
                            description: " انا جاى من اليوتيوب وعاوز رتبة بيع",
                            value: ` **الاجابة هى : \n  كل ما عليك هو ارسال دليل اشتراكك للقناة فى التكت وانتظر** `,


                        },
                        {
                            label: `رتبة البيع اتشالت منى`,
                            description: " ليش اتشالت رتبة البيع منى",
                            value: ` ** الاجابة هى : \n السبب انك اكيد عملت منشن ايفرى ون وهذا ضد القوانين ** `,


                        },
                        {
                            label: `رابط تبع ملفات خربان`,
                            description: " ليش ياخى رابط الملفات خربان",
                            value: ` ** الاجابة هى : \n حب الروابط بتاعتنا كلها جديدة مفيش حاجة خربانة تاكد من عندك🤣 ل** `,


                        },
                        {
                            label: `نظام البوستات كيف`,
                            description: "عاوز اعرف هل فيه نظام بوستات فى السيرفر ولا لاه",
                            value: ` ** الاجابة هى \n اكيد فيه نظام بوستات كل ما عليك هو كتابة امر \`\ بوست \`\ ** `,


                        },
                        {
                            label: `بارتنر`,
                            description: "عاوز ابقى بارتنر اعمل ايه",
                            value: ` ** كلم Ahmed Sn او Bergo  ** `,


                        },
                        {
                            label: `عاوز ابقى ادارة`,
                            description: " عاوز ابقى ادارة ياعم ",
                            value: ` ** الاجابة هى : \n روح لاخر السيرفر فيه روم اسمها تقديم الادارة فيه زرار دوس عليه واملى الفورم** `,


                        },


                    ),
            );






        const collector = mm.createMessageComponentCollector()
        collector.on("collect", async i => {
            if (i.customId === "follow") {

                await i.guild.channels.create({
                    name: `${i.user.username}`,
                    type: ChannelType.GuildText,
                    permissionOverwrites: [
                        {
                            id: i.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel],
                        },
                        {
                            id: i.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel],
                        },
                    ],
                }).then(async channel => {



          
                    db1.ensure("bergo",
                    {
                        Userid : [],
                        Channelid : []
                    }
                 )
                
                 db1.push ("bergo" , user , "Userid")
                 db1.push("bergo" , channel , "Channelid")
                    channel.send({ embeds: [new EmbedBuilder().setDescription(`** من فضلك قم باختيار المشكلة التى تواجهك **`)], content: `<@${interaction.user.id}>`, components: [menu] })
                    channel.send({ components: [ggg] })


                    const vab = interaction.guild.channels.cache.find(o => o.name === ` ${interaction.user.username}`)






                    await i.deferReply({ fetchReply: true, ephemeral: true })
                    return await i.editReply({ content: `**Done created <@${i.user.id}> <#${channel.id}> **` })
                })

            }

        })
        client.on(Events.InteractionCreate, async interaction => {



            if (!interaction.isSelectMenu()) return;


            if (interaction.customId === "select") {


                const selected = interaction.values.join(', ');
                await interaction.deferReply({ fetchReply: true })
                return await interaction.editReply({ content: ` <@${interaction.user.id}> ${selected}  ` });










            }





        })









        const channel = interaction.guild.channels.cache.find(r => r.name === `تذكرة ${interaction.user.username}`)
        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isButton()) return;
            if (interaction.customId === "close") {
                if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels) && !interaction.member.roles.cache.some((c) => c.name === "staff")) return await interaction.reply({ embeds: [new EmbedBuilder().setDescription(`<@${interaction.user.id}> You dont have permission Or you didnt have a role named (staff) , Sorry`)] })

                await interaction.deferReply({ fetchReply: true, ephemeral: true })
                return await interaction.followUp({ embeds: [new EmbedBuilder().setDescription(`** <@${interaction.user.id}> Done Your ticket  will be deleted after 5 seconds**`)] }).then(channel => {


                    setTimeout(() => // Setup a timer
                        interaction.channel.delete(), 5000) // Deletes the users message
                    // Deletes the ticket message
                    interaction.member.send({ content: ` ** <@${interaction.user.id}> Done your ticket has been deleted ** ` })



                })

            }

        })

































    }
}
