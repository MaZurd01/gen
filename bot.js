const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();


client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Generator Credits `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message', message => {
    if(message.content === '-hey'){
        message.channel.send('مفعل : :white_check_mark:')
    }
});
client2.on('message', message => {
    if(message.content === '-hey'){
        message.channel.send('مفعل : :white_check_mark:')
    }
});
client3.on('message', message => {
    if(message.content === '-hey'){
        message.channel.send('مفعل : :white_check_mark:')
    }
});

client4.on('message', message => {
    if(message.content === '-hey'){
        message.channel.send('مفعل : :white_check_mark:')
    }
});

client5.on('message', message => {
    if(message.content === '-hey'){
        message.channel.send('مفعل : :white_check_mark:')
    }
});
      

client.on('message', message => {

   let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say1 <words>`);
if (command == "say1") {
message.channel.send(args.join("  "))
   
  }
  
});


client2.on('message', message => {

   let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say2 <words>`);
if (command == "say2") {
message.channel.send(args.join("  "))
   
  }
  
});


client3.on('message', message => {

   let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say3 <words>`);
if (command == "say3") {
message.channel.send(args.join("  "))
   
  }
  
});

client4.on('message', message => {

   let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say4 <words>`);
if (command == "say4") {
message.channel.send(args.join("  "))
   
  }
});

client5.on('message', message => {

   let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`say4 <words>`);
if (command == "say5") {
message.channel.send(args.join("  "))
   
  }
});

client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily ')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});


client3.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});

client4.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});


client5.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client5.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client5.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#rep <@511260487397408768>')
    }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
              .then(m => {
                count++;
              })
              
            }
          }
    });


client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
              .then(m => {
                count++;
              })
              
            }
          }
    });

client5.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`**Credit Spam , Frame , Credit By mz , Farm Credit By mz, ez Farm - كردت اسبام اسبام اسبام اوف صح اصح اح نار ج **[ " ${x} " ]`)
              .then(m => {
                count++;
              })
              
            }
          }
    });




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN4);

