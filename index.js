const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client();
const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

client.on('message', async message => {
    if (message.content.startsWith('^^searchf') || message.content.startsWith('^^sf')) {
            const query = (message.content.startsWith('^^searchf') ? message.content.split('^^searchf ')[1] : message.content.split('^^sf')[1]);
            const response = await axios.get('https://api.imgur.com/3/gallery/search', {
                headers: {
                    'Authorization': 'Client-ID XXXXXXXXXXXXX'
                },
                params: {
                    q: query
                }
            });
    
            const images = response.data.data
            .filter(item => item.images && item.images.length > 0 && (item.images[0].type === 'image/jpeg' || item.images[0].type === 'image/png'));

        if (images.length > 0) {
            const shuffledImages = images.sort(() => Math.random() - 0.5);
            const selectedImages = shuffledImages.slice(0, 4);
        
            const embed = new Discord.MessageEmbed();
        
            for (const image of selectedImages) {
                embed.addField(
                    image.title || 'Sans titre', 
                    `[Cliquez ici pour voir l'image](${(image.images[0] && image.images[0].link) || ''})\n` +
                    `${image.description || ''}`,
                    true
                );
            }
            message.channel.send(embed);
        } 
        
    }

    else if (message.content.startsWith('^^search ') || message.content.startsWith('^^s')) {
        const query = (message.content.startsWith('^^search') ? message.content.split('^^search ')[1] : message.content.split('^^s')[1]);
        const response = await axios.get('https://api.imgur.com/3/gallery/search', {
            headers: {
                'Authorization': 'Client-ID XXXXXXXXXXXXXXX'
            },
            params: {
                q: query
            }
        });

        const images = response.data.data
        .filter(item => item.images && item.images.length > 0 && (item.images[0].type === 'image/jpeg' || item.images[0].type === 'image/png'));

        if (images.length > 0) {
            const shuffledImages = images.sort(() => Math.random() - 0.5);
            const selectedImages = shuffledImages.slice(0, 4);

            for (const image of selectedImages) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle(image.title || 'Sans titre')
                        .setURL(image.link)
                        .setDescription(image.description || '')
                        .setImage((image.images[0] && image.images[0].link) || '')
            
                        message.channel.send(embed);
            }
        } 
        else message.channel.send('Aucune image trouvée.');       
    }

    else if (message.content.startsWith('^^help') || message.content.startsWith('^^h')) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setDescription('Liste des commandes disponibles et leurs descriptions :')
            .addField('\u200b', '\u200b')
            .addField('^^search <recherche>', 'Recherche des images sur Imgur et envoie les 4 premières images trouvées sous forme d\'embeds séparés. Vous pouvez aussi utiliser ^^s à la place de ^^search pour la même commande.')
            .addField('^^searchf <recherche>', 'Recherche des images sur Imgur et envoie les 4 premières images trouvées sous forme de champs dans un embed. Vous pouvez aussi utiliser ^^sf à la place de ^^searchf pour la même commande.')
            .addField('\u200b', '\u200b')
            .addField('^^help', 'Affiche ce menu d\'aide. Vous pouvez aussi utiliser ^^h à la place de ^^help pour la même fonction.');

        message.channel.send(embed);
    }

});

client.login(token);
