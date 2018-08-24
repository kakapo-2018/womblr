
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Wombling-on', age:18, profile_pic:'', bio:'i’m just a carefree womble looking for a good time, a real free spirit looking for someone who can make some sweet blow-up teletubby, you bring your sweet skills, i’ll bring the helium'},
        {id: 2, username: 'Workingwomble69', age:19, profile_pic:'', bio:'I’ve been a career womble for the last ten years and just want a womble 	to kick back and relax with. Happy to be your sugar womble xx'},
        {id: 3, username: 'lil-wom-wom', age:25, profile_pic:'', bio:'womble on the streets but a human in the sheets. Nuff said. '},
        {id: 4, username: 'Bigbybodiggity', age:78, profile_pic:'', bio:'I just got out of a wom-term relationship, i’ve had to hide it for years 	but am looking for a womble to lick my paws'},
        {id: 5, username: 'Tomwombadil', age:54, profile_pic:'', bio:'I’m like no Womble you’ve ever met. If you think you can handle fast paced then hit me up, otherwise just get out of my way.'},
        {id: 6, username: 'WomLeFlom', age:18, profile_pic:'', bio:'High strung, big city lawyer just looking for a fun night of… stress relief ;)'},
        {id: 7, username: 'Wom-Bot-Cindy', age:22, profile_pic:'', bio:'Cute, shy womble but if you want to see more of me then transfer $14.99 to to this bank account: 45-4298-2994990-001. I’m so lonely and just need you to look after me.'},
        {id: 8, username: 'Willy-Wombly', age:24, profile_pic:'', bio:'I don’t understand why every womble on here is so up themselves. I’m a nice womble (some would say gentleman) who is looking for a womble that wants to be treated like a lady. Must be into anything I say. NO LOOKING AT OTHER WOMBLES!!!'},
        {id: 9, username: 'Dom_wom_daddy', age:35, profile_pic:'', bio:'Strict dom wom. Be furry and have a pointy nose. Yes pics are real. Send a snout pic if u want a response'},
        {id: 10, username: 'Wom Hanks', age:55, profile_pic:'', bio:'Currently a castaway on a deserted island. Long beard and a pit of a crust punk. In a open ltr with a painted volleyball. WOMBLISON!!!!'},
        {id: 11, username: 'Womnessa Carlton', age:23, profile_pic:'', bio:'I’m wombling my way downtown. Wombling fast wombles pass and I’m home bound. Just a plain old womble from Pennsylvania with a piano and a dream.'},
        {id: 12, username: 'Wom_guy5', age:31, profile_pic:'', bio:'Looking for friends haha. Pic is of the evo I want. '},
        {id: 13, username: 'Wom Bader Ginsberg', age:33, profile_pic:'', bio:'All the fives need to listen a ten is talking '},
        {id: 14, username: 'Sexy_wom_proxy', age:36, profile_pic:'', bio:'Hi sexy I also live in <location.proxy> and I’m insatiable. Come rub my snout.'},
        {id: 15, username: 'Womcinda Adern', age:27, profile_pic:'', bio:'Let’s do this. '},
        {id: 16, username: 'Siwom Bridges', age:28, profile_pic:'', bio:'*slow, boring and barely coherent mumbling*'},
        {id: 17, username: 'Albus Wombledore', age:31, profile_pic:'', bio:'Let me whip out my deluminator to set the mood'},
        {id: 18, username: 'Wombly Potter', age:45, profile_pic:'', bio:'Ginger fever, very famous. Must be into scars. You can ride my firebolt'},
        {id: 19, username: 'Gandalf_the_womble', age:41, profile_pic:'', bio:'Im 50 shades of wizard'},
        {id: 20, username: 'Womble_mort_xxx', age:39, profile_pic:'', bio:'Be my filthy horcrux. Purebloods only. Must be in to snake play.'},
      ]);
    });
};
