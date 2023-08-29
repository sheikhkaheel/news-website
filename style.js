//header part 

let header = document.getElementById('header');
let div1 = document.createElement('div');
let imglogo = document.createElement('img');
imglogo.id = 'imglogo';
imglogo.setAttribute('src', 'newslogo.png');
div1.append(imglogo);
let img = document.createElement('img');
img.id = 'img';
img.setAttribute('src', 'newsimg.png');
div1.append(img);
header.append(div1);

let nav = document.getElementById('nav');

let arrContent = [
    {
        naviteam: 'World',
        content: `Beijing’s Strong Economic Narrative Looks Different to Those on the Ground<br>
        <p>China has characterized concerns about the economic slowdown as being inflated by the West. Widespread anxiety and pessimism paint a different picture.</p>
        <br>
        She Rose From Poverty as China Prospered. Then It Made Her Poor Again.
        <p>Sun Junli is one of many small-business owners, the backbone of China’s economy, who lost everything to a change in government policy, our columnist writes.</p>
        <br>
        A Merchant Ship’s Perilous Black Sea Passage in Ukraine
        <p>Ukraine’s Danube River ports are key arteries for grain exports. But Russian threats and costly delays have made some shippers rethink the Black Sea.</p>
        <br>
        After Passing Cuba, Hurricane Idalia Heads for Western Florida
        <p>Nearly two dozen counties in Florida issued mandatory evacuations ahead of the storm, which reached hurricane strength early Tuesday.</p>`
    },
    {
        naviteam: 'Business',
        content: `TikTok’s U.S. Future Still in Limbo as Commerce Secretary Visits China
        <br>
        <p>Gina Raimondo, who is in China this week, has said banning TikTok could “lose every voter under 35, forever.”</p>
        <br>
        She Rose From Poverty as China Prospered. Then It Made Her Poor Again.
        <br>
        <p>Sun Junli is one of many small-business owners, the backbone of China’s economy, who lost everything to a change in government policy.</p>
        <br>
        U.S. Does Not Want to ‘Decouple’ From China, Commerce Chief Says
        <br>
        <p>Gina Raimondo, the commerce secretary, also emphasized U.S. concerns over harsh treatment of foreign companies and national security issues in a meeting with top officials in Beijing.</p>
        <br>
        The A.I. Revolution Is Coming. But Not as Fast as Some People Think.
        <br>
        <p>From steam power to the internet, there has always been a lag between technology invention and adoption across industries and the economy.</p>
        <br>`
    },
    {
        naviteam: 'Science',
        content: `How to Track a Songbird From Alaska to Peru
        <br>
        <p>To follow an olive-sided flycatcher, first you have to catch it.</p>
        <br>
        To follow an olive-sided flycatcher, first you have to catch it.
        <br>
        <p>A collection of small flutes carved from waterfowl bones may have been used as hunting aids, a new study suggests.</p>
        <br>
        Japan Scrubs Launch of X-Ray Telescope and Experimental Moon Lander
        <br>
        <p>The flight of the telescope and lunar mission was postponed less than 30 minutes ahead of the scheduled liftoff because of poor weather.</p>
        <br>
        The flight of the telescope and lunar mission was postponed less than 30 minutes ahead of the scheduled liftoff because of poor weather.
        <br>
        The Joys of Sketching Birds
        <br>
        <p>Times readers were invited to share their drawings of the avian life around them. Here are more of our favorites.</p>
        `
    },
    {
        naviteam: 'Health',
        content: `
        Covid Closed the Nation’s Schools. Cleaner Air Can Keep Them Open.
        <br>
        <p>Scientists and educators are searching for ways to improve air quality in the nation’s often dilapidated school buildings.</p>
        <br>
        Obesity Treatment Relieves Heart Failure Symptoms, Drugmaker’s Study Finds
        <br>
        <p>The drug Wegovy eased issues for people with a type of heart problem, adding to the treatment’s benefits beyond weight loss.</p>
        <br>
        Mental Health Spending Surged During the Pandemic
        <br>
        <p>Americans’ use of mental health services pivoted to remote visits and increased considerably, a new study found. Economists think both changes are here to stay.</p>
        <br>
        Americans’ use of mental health services pivoted to remote visits and increased considerably, a new study found. Economists think both changes are here to stay.
        <br>
        <p>Three studies in elite journals found that tumors are littered with microbes. But several teams have been unable to replicate the work.</p>`
    },
    {
        naviteam: 'Sports',
        content: `Knocked Off Their Perch, the Rangers Hope to Climb Back Up
        <br>
        <p>Texas lost eight games in a row, and gave up its long-held lead in the A.L. West. The team hope Monday’s win over the Mets is the start of something special.</p>
        <br>
        After the Loss of a Son, a Football Coach Confronts a Terrible Truth
        <br>
        <p>Meiko Locksley was found to have had a degenerative brain disease often associated with football. His father, the head coach at Maryland, is still reckoning with the implications.</p>
        <br>
        ‘The Mountain Will Make Cowards Out of All of Us
        <br>
        <p>Two former pro football players entered the Leadville Trail 100-mile race, a grueling slog over Colorado peaks. They were used to challenges, but this was a new kind of pain.</p>
        <br>
        At the U.S. Open, Frances Tiafoe Picks Up Where He Left Off
        <br>
        <p>Tiafoe, who made a sensational run to the semifinal in New York last year where he ran into Carlos Alcaraz, got an easy first-round win over Learner Tien on Monday.</p>`
    },
    {
        naviteam: 'Books',
        content: `From Paris to the West Village, a Memoir of Privilege and Pain
        <br>
        <p>In “Everything/Nothing/Someone,” Alice Carrière recalls her coming-of-age as the daughter of artists, and her eventual slip into dissociative disorder.</p>
        <br>
        A Sunny Place for Shady People
        <br>
        <p>Jonathan Miles’s “Once Upon a Time World” is a delightful, dizzying romp through the world’s most glamorous muse: the French Riviera.</p>
        <br>
        Zadie Smith Makes 1860s London Feel Alive, and Recognizable
        <br>
        <p>Her new novel, “The Fraud,” is based on a celebrated 19th-century criminal trial, but it keeps one eye focused clearly on today’s political populism.</p>
        <br>
        Why Is the Reputation of the U.S. Military Going South So Fast?
        <br>
        <p>Republicans are worried about the politics that shape our armed forces. Several recent books look at the good, the bad and the ugly of American military leadership and culture.
        </p>`
    },
    {
        naviteam: 'Arts',
        content: `After the Sudden Heralding of Hilma af Klint, Questions and Court Fights
        <br>
        <p>She rocked the art world in 2018. Now a legal battle looms over control of the painter’s visionary works, and historians question who really created many of her iconic paintings.</p>
        <br>
        She rocked the art world in 2018. Now a legal battle looms over control of the painter’s visionary works, and historians question who really created many of her iconic paintings.
        <br>
        <p>New films from David Fincher, Sofia Coppola, Ava DuVernay and Michael Mann will make up for the absence of stars kept away by the Hollywood strikes.</p>
        <br>
        In Chicago, Keeping the Heritage of Black Dance Moving
        <br>
        <p>An initiative started in 2019 helps to address funding disparities and offers a vision of Black dance as a form whose categories refuse to be static.</p>
        <br>
        An Effort to Focus on Long Overlooked Roma Suffering in the Holocaust
        <br>
        <p>As many as a half million Romani people were killed by the Nazis, according to one estimate. A new database tells the story of that genocide and its impact on individual lives.</p>`
    }
];

let ul = document.createElement('ul');
ul.id = 'ulItem'
for (let i = 0; i < arrContent.length; i++) {
    let li = document.createElement('li');
    li.id = 'liItem';
    li.innerHTML = arrContent[i].naviteam;

    main = document.getElementById('content');
    main.innerHTML = arrContent[0].content;

    li.addEventListener('click', () => {
        main.innerHTML = arrContent[i].content;
    })
    ul.append(li);
    nav.append(ul);
}