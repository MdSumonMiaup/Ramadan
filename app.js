/*
        About          
=========================
Theme Name: Ramadan Time Table 2021 Bangladesh
Theme URI: https://thew3lab.xyz/template/ramadan/
Author: Md Sumon Mia
Author URI: https://mdsumonmia.com
Description: Ramadan 2021 Time Table is a web based apps for Ramadan 2021 Bangladesh Shahri and Iftar Time.
Version: 1.0.0
*/

var today     = new Date(),
    toDate    = today.getDate(),
    thisMonth = today.getMonth(),
    thisYear  = today.getFullYear();

// Add Zero function {
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
// Sixty function {
function sixty(i) {
    if (i < 0) {
        i = 60 + i;
    }
    return i;
};
// Sixty plus function {
function sixtyPlus(i) {
    if (i >= 60) {
        i = i - 60;
    }
    return i;
};

var ramadanDay1  = new Date("14 April, 2021 04:15"),
    ruja1        = ramadanDay1.getDate(),
    sehriHour1   = addZero(ramadanDay1.getHours()),
    sehriMin1    = addZero(ramadanDay1.getMinutes()),
    iftarHour1   = addZero(6),
    iftarMin1    = addZero(23);

var ramadanDay2  = new Date("15 April, 2021 04:14"),
    ruja2        = ramadanDay2.getDate(),
    sehriHour2   = addZero(ramadanDay2.getHours()),
    sehriMin2    = addZero(ramadanDay2.getMinutes()),
    iftarHour2   = addZero(6),
    iftarMin2    = addZero(24);

var ramadanDay3  = new Date("16 April, 2021 04:13"),
    ruja3        = ramadanDay3.getDate(),
    sehriHour3   = addZero(ramadanDay3.getHours()),
    sehriMin3    = addZero(ramadanDay3.getMinutes()),
    iftarHour3   = addZero(6),
    iftarMin3    = addZero(24);

var ramadanDay4  = new Date("17 April, 2021 04:12"),
    ruja4        = ramadanDay4.getDate(),
    sehriHour4   = addZero(ramadanDay4.getHours()),
    sehriMin4    = addZero(ramadanDay4.getMinutes()),
    iftarHour4   = addZero(6),
    iftarMin4    = addZero(24);

var ramadanDay5  = new Date("18 April, 2021 04:11"),
    ruja5        = ramadanDay5.getDate(),
    sehriHour5   = addZero(ramadanDay5.getHours()),
    sehriMin5    = addZero(ramadanDay5.getMinutes()),
    iftarHour5   = addZero(6),
    iftarMin5    = addZero(25);

var ramadanDay6  = new Date("19 April, 2021 18:25"),
    ruja6        = ramadanDay6.getDate(),
    sehriHour6   = addZero(4),
    sehriMin6    = addZero(10),
    iftarHour6   = addZero(ramadanDay6.getHours()),
    iftarMin6    = addZero(ramadanDay6.getMinutes());

var ramadanDay7  = new Date("20 April, 2021 04:09"),
    ruja7        = ramadanDay7.getDate(),
    sehriHour7   = addZero(ramadanDay7.getHours()),
    sehriMin7    = addZero(ramadanDay7.getMinutes()),
    iftarHour7   = addZero(6),
    iftarMin7    = addZero(26);

var ramadanDay8  = new Date("21 April, 2021 04:08"),
    ruja8        = ramadanDay8.getDate(),
    sehriHour8   = addZero(ramadanDay8.getHours()),
    sehriMin8    = addZero(ramadanDay8.getMinutes()),
    iftarHour8   = addZero(6),
    iftarMin8    = addZero(26);

var ramadanDay9  = new Date("22 April, 2021 06:27 PM"),
    ruja9        = ramadanDay9.getDate(),
    sehriHour9   = addZero(4),
    sehriMin9    = addZero(7),
    iftarHour9   = addZero(ramadanDay9.getHours()),
    iftarMin9    = addZero(ramadanDay9.getMinutes());

var ramadanDay10  = new Date("23 April, 2021 06:27 PM"),
    ruja10        = ramadanDay10.getDate(),
    sehriHour10   = addZero(4),
    sehriMin10    = addZero(6),
    iftarHour10   = addZero(ramadanDay10.getHours()),
    iftarMin10    = addZero(ramadanDay10.getMinutes());

var ramadanDay11  = new Date("24 April, 2021 06:28 PM"),
    ruja11        = ramadanDay11.getDate(),
    sehriHour11   = addZero(4),
    sehriMin11    = addZero(5),
    iftarHour11   = addZero(ramadanDay11.getHours()),
    iftarMin11    = addZero(ramadanDay11.getMinutes());

var ramadanDay12  = new Date("25 April, 2021 06:28 PM"),
    ruja12        = ramadanDay12.getDate(),
    sehriHour12   = addZero(4),
    sehriMin12    = addZero(5),
    iftarHour12   = addZero(ramadanDay12.getHours()),
    iftarMin12    = addZero(ramadanDay12.getMinutes());

var ramadanDay13  = new Date("26 April, 2021 06:29 PM"),
    ruja13        = ramadanDay13.getDate(),
    sehriHour13   = addZero(4),
    sehriMin13    = addZero(4),
    iftarHour13   = addZero(6),
    iftarMin13    = addZero(29);
    
var ramadanDay14  = new Date("27 April, 2021 06:29 PM"),
    ruja14        = ramadanDay14.getDate(),
    sehriHour14   = addZero(4),
    sehriMin14    = addZero(3),
    iftarHour14   = addZero(6),
    iftarMin14    = addZero(29);

var ramadanDay15  = new Date("28 April, 2021 06:29 PM"),
    ruja15        = ramadanDay15.getDate(),
    sehriHour15   = addZero(4),
    sehriMin15    = addZero(2),
    iftarHour15   = addZero(6),
    iftarMin15    = addZero(29);

var ramadanDay16  = new Date("29 April, 2021 06:30 PM"),
    ruja16        = ramadanDay16.getDate(),
    sehriHour16   = addZero(4),
    sehriMin16    = addZero(1),
    iftarHour16   = addZero(6),
    iftarMin16    = addZero(30);

var ramadanDay17  = new Date("30 April, 2021 06:30 PM"),
    ruja17        = ramadanDay17.getDate(),
    sehriHour17   = addZero(3),
    sehriMin17    = addZero(0),
    iftarHour17   = addZero(6),
    iftarMin17    = addZero(30);

var ramadanDay18  = new Date("1 May, 2021 06:31 PM"),
    ruja18        = ramadanDay18.getDate(),
    sehriHour18   = addZero(3),
    sehriMin18    = addZero(59),
    iftarHour18   = addZero(6),
    iftarMin18    = addZero(31);

var ramadanDay19  = new Date("2 May, 2021 06:31 PM"),
    ruja19        = ramadanDay19.getDate(),
    sehriHour19   = addZero(3),
    sehriMin19    = addZero(58),
    iftarHour19   = addZero(6),
    iftarMin19    = addZero(31);

var ramadanDay20  = new Date("3 May, 2021 06:32 PM"),
    ruja20        = ramadanDay20.getDate(),
    sehriHour20   = addZero(3),
    sehriMin20    = addZero(57),
    iftarHour20   = addZero(6),
    iftarMin20    = addZero(32);

var ramadanDay21  = new Date("4 May, 2021 06:32 PM"),
    ruja21        = ramadanDay21.getDate(),
    sehriHour21   = addZero(3),
    sehriMin21    = addZero(55),
    iftarHour21   = addZero(6),
    iftarMin21    = addZero(32);

var ramadanDay22  = new Date("5 May, 2021 06:33 PM"),
    ruja22        = ramadanDay22.getDate(),
    sehriHour22   = addZero(3),
    sehriMin22    = addZero(54),
    iftarHour22   = addZero(6),
    iftarMin22    = addZero(33);
    
var ramadanDay23  = new Date("6 May, 2021 06:33 PM"),
    ruja23        = ramadanDay23.getDate(),
    sehriHour23   = addZero(3),
    sehriMin23    = addZero(53),
    iftarHour23   = addZero(6),
    iftarMin23    = addZero(33);

var ramadanDay24  = new Date("7 May, 2021 06:34 PM"),
    ruja24        = ramadanDay24.getDate(),
    sehriHour24   = addZero(3),
    sehriMin24    = addZero(52),
    iftarHour24   = addZero(6),
    iftarMin24    = addZero(34);

var ramadanDay25  = new Date("8 May, 2021 06:34 PM"),
    ruja25        = ramadanDay25.getDate(),
    sehriHour25   = addZero(3),
    sehriMin25    = addZero(51),
    iftarHour25   = addZero(6),
    iftarMin25    = addZero(34);

var ramadanDay26  = new Date("9 May, 2021 06:35 PM"),
    ruja26        = ramadanDay26.getDate(),
    sehriHour26   = addZero(3),
    sehriMin26    = addZero(50),
    iftarHour26   = addZero(6),
    iftarMin26    = addZero(35);

var ramadanDay27  = new Date("10 May, 2021 06:35 PM"),
    ruja27        = ramadanDay27.getDate(),
    sehriHour27   = addZero(3),
    sehriMin27    = addZero(50),
    iftarHour27   = addZero(6),
    iftarMin27    = addZero(35);

var ramadanDay28  = new Date("11 May, 2021 06:36 PM"),
    ruja28        = ramadanDay28.getDate(),
    sehriHour28   = addZero(3),
    sehriMin28    = addZero(49),
    iftarHour28   = addZero(6),
    iftarMin28    = addZero(36);

var ramadanDay29  = new Date("12 May, 2021 06:36 PM"),
    ruja29        = ramadanDay29.getDate(),
    sehriHour29   = addZero(3),
    sehriMin29    = addZero(49),
    iftarHour29   = addZero(6),
    iftarMin29    = addZero(36);
    
var ramadanDay30  = new Date("13 May, 2021 06:36 PM"),
    ruja30        = ramadanDay30.getDate(),
    sehriHour30   = addZero(3),
    sehriMin30    = addZero(48),
    iftarHour30   = addZero(6),
    iftarMin30    = addZero(36);

var eidDay        = new Date("14 May, 2021 00:01"),
    eidDate       = eidDay.getDate();

var sehriHour = document.getElementsByClassName('sehriHour'),
    iftarHour = document.getElementsByClassName('iftarHour'),
    sehriMin  = document.getElementById('sehriMin'),
    iftarMin  = document.getElementById('iftarMin'),

    // Mymemsingh
    sehriMin__mym = document.getElementById('sehriMin__mym'),
    iftarMin__mym = document.getElementById('iftarMin__mym'),
    // Barisal
    sehriMin__bari = document.getElementById('sehriMin__bari'),
    iftarMin__bari = document.getElementById('iftarMin__bari'),
    // Khulna
    sehriMin__kh = document.getElementById('sehriMin__kh'),
    iftarMin__kh = document.getElementById('iftarMin__kh'),
    // Rajshahi
    sehriMin__rj = document.getElementById('sehriMin__rj'),
    iftarMin__rj = document.getElementById('iftarMin__rj'),
    // Rangpur
    sehriMin__rn = document.getElementById('sehriMin__rn'),
    iftarMin__rn = document.getElementById('iftarMin__rn'),
    // Sylhet
    sehriMin__sl = document.getElementById('sehriMin__sl'),
    iftarMin__sl = document.getElementById('iftarMin__sl'),
    // Chattogram
    sehriMin__ch = document.getElementById('sehriMin__ch'),
    iftarMin__ch = document.getElementById('iftarMin__ch'),

    ramadanDay = document.getElementById('ramadanDay');

// Title Information
document.getElementById('title__date').innerHTML = toDate;
document.getElementById('title__year').innerHTML = thisYear;
if (thisMonth == 4 ) {
    document.getElementById('title__month').innerHTML = 'May';

    // Times

    if (toDate == ruja18) {
        ramadanDay.innerHTML = '18th';
        sehriHour[0].innerHTML = sehriHour18;
        sehriMin.innerHTML = sehriMin18;
        iftarMin.innerHTML = iftarMin18;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour18;
        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin18) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin18 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = addZero(parseInt(sehriHour18) + parseInt(1));
        sehriMin__bari.innerHTML = addZero(sixtyPlus(parseInt(sehriMin18) + parseInt(2)));
        iftarMin__bari.innerHTML = iftarMin18 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = addZero(parseInt(sehriHour18) + parseInt(1));
        sehriMin__kh.innerHTML = addZero(sixtyPlus(parseInt(sehriMin18) + parseInt(5)));
        iftarMin__kh.innerHTML = iftarMin18 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = addZero(parseInt(sehriHour18) + parseInt(1));
        sehriMin__rj.innerHTML = addZero(sixtyPlus(parseInt(sehriMin18) + parseInt(5)));
        iftarMin__rj.innerHTML = iftarMin18 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour18;
        sehriMin__rn.innerHTML = sehriMin18;
        iftarMin__rn.innerHTML = iftarMin18;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour18;
        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin18) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin18 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour18;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin18) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin18 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[17] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja19) {
        ramadanDay.innerHTML = '19th';
        sehriHour[0].innerHTML = sehriHour19;
        sehriMin.innerHTML = sehriMin19;
        iftarMin.innerHTML = iftarMin19;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour19;
        sehriMin__mym.innerHTML = addZero(sixty(parseInt(sehriMin19) - parseInt(3)));
        iftarMin__mym.innerHTML = iftarMin19 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = addZero(parseInt(sehriHour19) + parseInt(1));
        sehriMin__bari.innerHTML = addZero(sixtyPlus(parseInt(sehriMin19) + parseInt(2)));
        iftarMin__bari.innerHTML = iftarMin19 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = addZero(parseInt(sehriHour19) + parseInt(1));
        sehriMin__kh.innerHTML = addZero(sixtyPlus(parseInt(sehriMin19) + parseInt(5)));
        iftarMin__kh.innerHTML = iftarMin19 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = addZero(parseInt(sehriHour19) + parseInt(1));

        sehriMin__rj.innerHTML = addZero(sixtyPlus(parseInt(sehriMin19) + parseInt(5)));
        iftarMin__rj.innerHTML = iftarMin19 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour19;
        sehriMin__rn.innerHTML = sehriMin19;
        iftarMin__rn.innerHTML = iftarMin19;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour19;
        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin19) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin19 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour19;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin19) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin19 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[18] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja20) {
        ramadanDay.innerHTML = '20th';
        sehriHour[0].innerHTML = sehriHour20;
        sehriMin.innerHTML = sehriMin20;

        iftarMin.innerHTML = iftarMin20;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour20;
        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin20) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin20 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour20;
        sehriMin__bari.innerHTML = addZero(sixtyPlus(parseInt(sehriMin20) + parseInt(2)));
        iftarMin__bari.innerHTML = iftarMin20 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = addZero(parseInt(sehriHour20) + parseInt(1));
        sehriMin__kh.innerHTML = addZero(sixtyPlus(parseInt(sehriMin20) + parseInt(5)));
        iftarMin__kh.innerHTML = iftarMin20 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = addZero(parseInt(sehriHour20) + parseInt(1));
        sehriMin__rj.innerHTML = addZero(sixtyPlus(parseInt(sehriMin20) + parseInt(5)));
        iftarMin__rj.innerHTML = iftarMin20 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour20;
        sehriMin__rn.innerHTML = sehriMin20;
        iftarMin__rn.innerHTML = iftarMin20;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour20;
        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin20) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin20 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour20;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin20) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin20 - 7;
        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[19] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja21) {
        ramadanDay.innerHTML = '21th';
        sehriHour[0].innerHTML = sehriHour21;
        sehriMin.innerHTML = sehriMin21;
        iftarMin.innerHTML = iftarMin21;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour21;
        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin21) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin21 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour21;
        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin21) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin21 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = addZero(parseInt(sehriHour21) + parseInt(1));
        sehriMin__kh.innerHTML = addZero(sixtyPlus(parseInt(sehriMin21) + parseInt(5)));
        iftarMin__kh.innerHTML = iftarMin21 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = addZero(parseInt(sehriHour21) + parseInt(1));
        sehriMin__rj.innerHTML = addZero(sixtyPlus(parseInt(sehriMin21) + parseInt(5)));
        iftarMin__rj.innerHTML = iftarMin21 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour21;
        sehriMin__rn.innerHTML = sehriMin21;
        iftarMin__rn.innerHTML = iftarMin21;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour21;
        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin21) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin21 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour21;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin21) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin21 - 7;
        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[20] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja22) {
        ramadanDay.innerHTML = '22th';
        sehriHour[0].innerHTML = sehriHour22;
        sehriMin.innerHTML = sehriMin22;

        iftarMin.innerHTML = iftarMin22;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour22;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin22) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin22 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour22;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin22) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin22 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour22;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin22) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin22 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour22;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin22) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin22 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour22;

        sehriMin__rn.innerHTML = sehriMin22;
        iftarMin__rn.innerHTML = iftarMin22;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour22;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin22) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin22 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour22;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin22) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin22 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[21] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja23) {
        ramadanDay.innerHTML = '23th';
        sehriHour[0].innerHTML = sehriHour23;
        sehriMin.innerHTML = sehriMin23;

        iftarMin.innerHTML = iftarMin23;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour23;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin23) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin23 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour23;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin23) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin23 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour23;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin23) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin23 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour23;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin23) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin23 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour23;

        sehriMin__rn.innerHTML = sehriMin23;
        iftarMin__rn.innerHTML = iftarMin23;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour23;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin23) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin23 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour23;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin23) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin23 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[22] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja24) {
        ramadanDay.innerHTML = '24th';
        sehriHour[0].innerHTML = sehriHour24;
        sehriMin.innerHTML = sehriMin24;

        iftarMin.innerHTML = iftarMin24;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour24;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin24) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin24 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour24;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin24) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin24 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour24;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin24) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin24 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour24;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin24) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin24 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour24;

        sehriMin__rn.innerHTML = sehriMin24;
        iftarMin__rn.innerHTML = iftarMin24;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour24;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin24) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin24 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour24;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin24) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin24 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[23] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja25) {
        ramadanDay.innerHTML = '25th';
        sehriHour[0].innerHTML = sehriHour25;
        sehriMin.innerHTML = sehriMin25;

        iftarMin.innerHTML = iftarMin25;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour25;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin25) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin25 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour25;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin25) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin25 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour25;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin25) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin25 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour25;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin25) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin25 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour25;

        sehriMin__rn.innerHTML = sehriMin25;
        iftarMin__rn.innerHTML = iftarMin25;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour25;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin25) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin25 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour25;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin25) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin25 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[24] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja26) {
        ramadanDay.innerHTML = '26th';
        sehriHour[0].innerHTML = sehriHour26;
        sehriMin.innerHTML = sehriMin26;

        iftarMin.innerHTML = iftarMin26;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour26;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin26) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin26 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour26;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin26) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin26 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour26;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin26) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin26 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour26;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin26) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin26 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour26;

        sehriMin__rn.innerHTML = sehriMin26;
        iftarMin__rn.innerHTML = iftarMin26;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour26;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin26) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin26 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour26;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin26) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin26 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[25] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja27) {
        ramadanDay.innerHTML = '27th';
        sehriHour[0].innerHTML = sehriHour27;
        sehriMin.innerHTML = sehriMin27;

        iftarMin.innerHTML = iftarMin27;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour27;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin27) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin27 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour27;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin27) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin27 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour27;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin27) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin27 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour27;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin27) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin27 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour27;

        sehriMin__rn.innerHTML = sehriMin27;
        iftarMin__rn.innerHTML = iftarMin27;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour27;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin27) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin27 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour27;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin27) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin27 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[26] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja28) {
        ramadanDay.innerHTML = '28th';
        sehriHour[0].innerHTML = sehriHour28;
        sehriMin.innerHTML = sehriMin28;

        iftarMin.innerHTML = iftarMin28;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour28;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin28) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin28 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour28;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin28) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin28 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour28;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin28) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin28 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour28;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin28) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin28 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour28;

        sehriMin__rn.innerHTML = sehriMin28;
        iftarMin__rn.innerHTML = iftarMin28;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour28;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin28) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin28 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour28;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin28) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin28 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[27] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja29) {
        ramadanDay.innerHTML = '29th';
        sehriHour[0].innerHTML = sehriHour29;
        sehriMin.innerHTML = sehriMin29;

        iftarMin.innerHTML = iftarMin29;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour29;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin29) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin29 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour29;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin29) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin29 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour29;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin29) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin29 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour29;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin29) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin29 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour29;

        sehriMin__rn.innerHTML = sehriMin29;
        iftarMin__rn.innerHTML = iftarMin29;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour29;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin29) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin29 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour29;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin29) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin29 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[28] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja30) {
        ramadanDay.innerHTML = '30th';
        sehriHour[0].innerHTML = sehriHour30;
        sehriMin.innerHTML = sehriMin30;

        iftarMin.innerHTML = iftarMin30;
    
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour30;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin30) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin30 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour30;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin30) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin30 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour30;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin30) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin30 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour30;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin30) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin30 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour30;

        sehriMin__rn.innerHTML = sehriMin30;
        iftarMin__rn.innerHTML = iftarMin30;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour30;

        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin30) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin30 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour30;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin30) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin30 - 7;
                
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[29] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == eidDate) {
        document.getElementById('eid__welcome').style.display = "block";
        document.getElementById('ramadan').style.display = "none";
        document.getElementById('duwa').style.display = "none";
    } else {
        document.getElementById('ramadan').style.display = "none";
        document.getElementById('duwa').style.display = "none";
        document.getElementById('others').style.display = "block";
    }

} else if (thisMonth == 3 ) {
    document.getElementById('title__month').innerHTML = 'April';

    // * Times * //

    if (toDate == ruja1) {
        ramadanDay.innerHTML = '1st';
        sehriHour[0].innerHTML = sehriHour1;
        sehriMin.innerHTML = sehriMin1;

        iftarMin.innerHTML = iftarMin1;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour1;

        sehriMin__mym.innerHTML = sehriMin1 - 3;
        iftarMin__mym.innerHTML = iftarMin1 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour1;

        sehriMin__bari.innerHTML = sehriMin1 + 2;
        iftarMin__bari.innerHTML = iftarMin1 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour1;

        sehriMin__kh.innerHTML = sehriMin1 + 5;
        iftarMin__kh.innerHTML = iftarMin1 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour1;

        sehriMin__rj.innerHTML = sehriMin1 + 5;
        iftarMin__rj.innerHTML = iftarMin1 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour1;

        sehriMin__rn.innerHTML = sehriMin1;
        iftarMin__rn.innerHTML = iftarMin1;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour1;

        sehriMin__sl.innerHTML = sehriMin1 - 7;
        iftarMin__sl.innerHTML = iftarMin1 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour1;

        sehriMin__ch.innerHTML = sehriMin1 - 2;
        iftarMin__ch.innerHTML = iftarMin1 - 7;

    } else if (toDate == ruja2) {
        ramadanDay.innerHTML = '2nd';
        sehriHour[0].innerHTML = sehriHour2;
        sehriMin.innerHTML = sehriMin2;

        iftarMin.innerHTML = iftarMin2;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour2;

        sehriMin__mym.innerHTML = sehriMin2 - 3;
        iftarMin__mym.innerHTML = iftarMin2 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour2;

        sehriMin__bari.innerHTML = sehriMin2 + 2;
        iftarMin__bari.innerHTML = iftarMin2 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour2;

        sehriMin__kh.innerHTML = sehriMin2 + 5;
        iftarMin__kh.innerHTML = iftarMin2 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour2;

        sehriMin__rj.innerHTML = sehriMin2 + 5;
        iftarMin__rj.innerHTML = iftarMin2 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour2;

        sehriMin__rn.innerHTML = sehriMin2;
        iftarMin__rn.innerHTML = iftarMin2;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour2;

        sehriMin__sl.innerHTML = sehriMin2 - 7;
        iftarMin__sl.innerHTML = iftarMin2 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour2;

        sehriMin__ch.innerHTML = sehriMin2 - 2;
        iftarMin__ch.innerHTML = iftarMin2 - 7;

    } else if (toDate == ruja3) {
        ramadanDay.innerHTML = '3rd';
        sehriHour[0].innerHTML = sehriHour3;
        sehriMin.innerHTML = sehriMin3;

        iftarMin.innerHTML = iftarMin3;
        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour3;

        sehriMin__mym.innerHTML = sehriMin3 - 3;
        iftarMin__mym.innerHTML = iftarMin3 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour3;

        sehriMin__bari.innerHTML = sehriMin3 + 2;
        iftarMin__bari.innerHTML = iftarMin3 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour3;

        sehriMin__kh.innerHTML = sehriMin3 + 5;
        iftarMin__kh.innerHTML = iftarMin3 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour3;

        sehriMin__rj.innerHTML = sehriMin3 + 5;
        iftarMin__rj.innerHTML = iftarMin3 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour3;

        sehriMin__rn.innerHTML = sehriMin3;
        iftarMin__rn.innerHTML = iftarMin3;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour3;

        sehriMin__sl.innerHTML = sehriMin3 - 7;
        iftarMin__sl.innerHTML = iftarMin3 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour3;

        sehriMin__ch.innerHTML = sehriMin3 - 2;
        iftarMin__ch.innerHTML = iftarMin3 - 7;

    } else if (toDate == ruja4) {
        ramadanDay.innerHTML = '4th';
        sehriHour[0].innerHTML = sehriHour4;
        sehriMin.innerHTML = sehriMin4;

        iftarMin.innerHTML = iftarMin4;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour4;

        sehriMin__mym.innerHTML = sehriMin4 - 3;
        iftarMin__mym.innerHTML = iftarMin4 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour4;

        sehriMin__bari.innerHTML = sehriMin4 + 2;
        iftarMin__bari.innerHTML = iftarMin4 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour4;

        sehriMin__kh.innerHTML = sehriMin4 + 5;
        iftarMin__kh.innerHTML = iftarMin4 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour4;

        sehriMin__rj.innerHTML = sehriMin4 + 5;
        iftarMin__rj.innerHTML = iftarMin4 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour4;

        sehriMin__rn.innerHTML = sehriMin4;
        iftarMin__rn.innerHTML = iftarMin4;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour4;

        sehriMin__sl.innerHTML = sehriMin4 - 7;
        iftarMin__sl.innerHTML = iftarMin4 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour4;

        sehriMin__ch.innerHTML = sehriMin4 - 2;
        iftarMin__ch.innerHTML = iftarMin4 - 7;

    } else if (toDate == ruja5) {
        ramadanDay.innerHTML = '5th';
        sehriHour[0].innerHTML = sehriHour5;
        sehriMin.innerHTML = sehriMin5;

        iftarMin.innerHTML = iftarMin5;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour5;

        sehriMin__mym.innerHTML = sehriMin5 - 3;
        iftarMin__mym.innerHTML = iftarMin5 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour5;

        sehriMin__bari.innerHTML = sehriMin5 + 2;
        iftarMin__bari.innerHTML = iftarMin5 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour5;

        sehriMin__kh.innerHTML = sehriMin5 + 5;
        iftarMin__kh.innerHTML = iftarMin5 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour5;

        sehriMin__rj.innerHTML = sehriMin5 + 5;
        iftarMin__rj.innerHTML = iftarMin5 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour5;

        sehriMin__rn.innerHTML = sehriMin5;
        iftarMin__rn.innerHTML = iftarMin5;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour5;

        sehriMin__sl.innerHTML = sehriMin5 - 7;
        iftarMin__sl.innerHTML = iftarMin5 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour5;

        sehriMin__ch.innerHTML = sehriMin5 - 2;
        iftarMin__ch.innerHTML = iftarMin5 - 7;

    } else if (toDate == ruja6) {
        ramadanDay.innerHTML = '6th';
        sehriHour[0].innerHTML = sehriHour6;
        sehriMin.innerHTML = sehriMin6;

        iftarMin.innerHTML = iftarMin6;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour6;

        sehriMin__mym.innerHTML = sehriMin6 - 3;
        iftarMin__mym.innerHTML = iftarMin6 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour6;

        sehriMin__bari.innerHTML = sehriMin6 + 2;
        iftarMin__bari.innerHTML = iftarMin6 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour6;

        sehriMin__kh.innerHTML = sehriMin6 + 5;
        iftarMin__kh.innerHTML = iftarMin6 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour6;

        sehriMin__rj.innerHTML = sehriMin6 + 5;
        iftarMin__rj.innerHTML = iftarMin6 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour6;

        sehriMin__rn.innerHTML = sehriMin6;
        iftarMin__rn.innerHTML = iftarMin6;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour6;

        sehriMin__sl.innerHTML = sehriMin6 - 7;
        iftarMin__sl.innerHTML = iftarMin6 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour6;

        sehriMin__ch.innerHTML = sehriMin6 - 2;
        iftarMin__ch.innerHTML = iftarMin6 - 7;

    } else if (toDate == ruja7) {
        ramadanDay.innerHTML = '7th';
        sehriHour[0].innerHTML = sehriHour7;
        sehriMin.innerHTML = sehriMin7;

        iftarMin.innerHTML = iftarMin7;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour7;

        sehriMin__mym.innerHTML = sehriMin7 - 3;
        iftarMin__mym.innerHTML = iftarMin7 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour7;

        sehriMin__bari.innerHTML = sehriMin7 + 2;
        iftarMin__bari.innerHTML = iftarMin7 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour7;

        sehriMin__kh.innerHTML = sehriMin7 + 5;
        iftarMin__kh.innerHTML = iftarMin7 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour7;

        sehriMin__rj.innerHTML = sehriMin7 + 5;
        iftarMin__rj.innerHTML = iftarMin7 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour7;

        sehriMin__rn.innerHTML = sehriMin7;
        iftarMin__rn.innerHTML = iftarMin7;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour7;

        sehriMin__sl.innerHTML = sehriMin7 - 7;
        iftarMin__sl.innerHTML = iftarMin7 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour7;

        sehriMin__ch.innerHTML = sehriMin7 - 2;
        iftarMin__ch.innerHTML = iftarMin7 - 7;

    } else if (toDate == ruja8) {
        ramadanDay.innerHTML = '8th';
        sehriHour[0].innerHTML = sehriHour8;
        sehriMin.innerHTML = sehriMin8;

        iftarMin.innerHTML = iftarMin8;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour8;

        sehriMin__mym.innerHTML = sehriMin8 - 3;
        iftarMin__mym.innerHTML = iftarMin8 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour8;

        sehriMin__bari.innerHTML = sehriMin8 + 2;
        iftarMin__bari.innerHTML = iftarMin8 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour8;

        sehriMin__kh.innerHTML = sehriMin8 + 5;
        iftarMin__kh.innerHTML = iftarMin8 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour8;

        sehriMin__rj.innerHTML = sehriMin8 + 5;
        iftarMin__rj.innerHTML = iftarMin8 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour8;

        sehriMin__rn.innerHTML = sehriMin8;
        iftarMin__rn.innerHTML = iftarMin8;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour8;

        sehriMin__sl.innerHTML = sehriMin8 - 7;
        iftarMin__sl.innerHTML = iftarMin8 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour8;

        sehriMin__ch.innerHTML = sehriMin8 - 2;
        iftarMin__ch.innerHTML = iftarMin8 - 7;
    } else if (toDate == ruja9) {
        ramadanDay.innerHTML = '9th';
        sehriHour[0].innerHTML = sehriHour9;
        sehriMin.innerHTML = sehriMin9;
        iftarMin.innerHTML = iftarMin9;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour9;
        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin9) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin9 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour9;
        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin9) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin9 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour9;
        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin9) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin9 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour9;
        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin9) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin9 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour9;
        sehriMin__rn.innerHTML = sehriMin9;
        iftarMin__rn.innerHTML = iftarMin9;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour9;
        sehriMin__sl.innerHTML = addZero(parseInt(sehriMin9) - parseInt(7));
        iftarMin__sl.innerHTML = iftarMin9 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour9;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin9) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin9 - 7;

        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[8] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja10) {
        ramadanDay.innerHTML = '10th';
        sehriHour[0].innerHTML = sehriHour10;
        sehriMin.innerHTML = sehriMin10;

        iftarMin.innerHTML = iftarMin10;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour10;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin10) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin10 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour10;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin10) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin10 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour10;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin10) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin10 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour10;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin10) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin10 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour10;

        sehriMin__rn.innerHTML = sehriMin10;
        iftarMin__rn.innerHTML = iftarMin10;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour10 - 1);

        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin10) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin10 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour10;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin10) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin10 - 7;

        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[9] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja11) {
        ramadanDay.innerHTML = '11th';
        sehriHour[0].innerHTML = sehriHour11;
        sehriMin.innerHTML = sehriMin11;

        iftarMin.innerHTML = iftarMin11;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour11;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin11) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin11 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour11;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin11) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin11 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour11;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin11) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin11 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour11;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin11) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin11 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour11;

        sehriMin__rn.innerHTML = sehriMin11;
        iftarMin__rn.innerHTML = iftarMin11;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour11 - 1);

        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin11) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin11 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour11;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin11) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin11 - 7;

        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[10] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja12) {
        ramadanDay.innerHTML = '12th';
        sehriHour[0].innerHTML = sehriHour12;
        sehriMin.innerHTML = sehriMin12;

        iftarMin.innerHTML = iftarMin12;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour12;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin12) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin12 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour12;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin12) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin12 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour12;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin12) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin12 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour12;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin12) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin12 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour12;

        sehriMin__rn.innerHTML = sehriMin12;
        iftarMin__rn.innerHTML = iftarMin12;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour12 - 1);

        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin12) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin12 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour12;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin12) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin12 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[11] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja13) {
        ramadanDay.innerHTML = '13th';
        sehriHour[0].innerHTML = sehriHour13;
        sehriMin.innerHTML = sehriMin13;

        iftarMin.innerHTML = iftarMin13;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour13;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin13) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin13 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour13;
        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin13) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin13 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour13;
        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin13) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin13 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour13;
        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin13) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin13 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour13;
        sehriMin__rn.innerHTML = sehriMin13;
        iftarMin__rn.innerHTML = iftarMin13;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour13 - 1);
        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin13) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin13 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour13;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin13) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin13 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[12] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja14) {
        ramadanDay.innerHTML = '14th';
        sehriHour[0].innerHTML = sehriHour14;
        sehriMin.innerHTML = sehriMin14;

        iftarMin.innerHTML = iftarMin14;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour14;

        sehriMin__mym.innerHTML = addZero(parseInt(sehriMin14) - parseInt(3));
        iftarMin__mym.innerHTML = iftarMin14 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour14;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin14) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin14 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour14;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin14) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin14 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour14;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin14) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin14 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour14;

        sehriMin__rn.innerHTML = sehriMin14;
        iftarMin__rn.innerHTML = iftarMin14;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour14 - 1);
        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin14) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin14 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour14;
        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin14) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin14 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[13] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja15) {
        ramadanDay.innerHTML = '15th';
        sehriHour[0].innerHTML = sehriHour15;
        sehriMin.innerHTML = sehriMin15;

        iftarMin.innerHTML = iftarMin15;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour15;

        sehriMin__mym.innerHTML = addZero(sixty(parseInt(sehriMin15) - parseInt(3)));
        iftarMin__mym.innerHTML = iftarMin15 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour15;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin15) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin15 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour15;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin15) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin15 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour15;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin15) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin15 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour15;

        sehriMin__rn.innerHTML = sehriMin15;
        iftarMin__rn.innerHTML = iftarMin15;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour15 - 1);

        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin15) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin15 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour15;

        sehriMin__ch.innerHTML = addZero(parseInt(sehriMin15) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin15 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[14] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } else if (toDate == ruja16) {
        ramadanDay.innerHTML = '16th';
        sehriHour[0].innerHTML = sehriHour16;
        sehriMin.innerHTML = sehriMin16;

        iftarMin.innerHTML = iftarMin16;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour16;

        sehriMin__mym.innerHTML = addZero(sixty(parseInt(sehriMin16) - parseInt(3)));
        iftarMin__mym.innerHTML = iftarMin16 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour16;

        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin16) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin16 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour16;

        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin16) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin16 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour16;

        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin16) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin16 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour16;

        sehriMin__rn.innerHTML = sehriMin16;
        iftarMin__rn.innerHTML = iftarMin16;
        // Sylhet Division
        sehriHour[6].innerHTML = addZero(sehriHour16 - 1);

        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin16) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin16 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = addZero(sehriHour16 - 1);

        sehriMin__ch.innerHTML = sixty(parseInt(sehriMin16) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin16 - 7;

        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[15] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);


    } else if (toDate == ruja17) {
        ramadanDay.innerHTML = '17th';
        sehriHour[0].innerHTML = sehriHour17;
        sehriMin.innerHTML = sehriMin17;
        iftarMin.innerHTML = iftarMin17;

        // Mymensingh Division
        sehriHour[1].innerHTML = sehriHour17;
        sehriMin__mym.innerHTML = addZero(sixty(parseInt(sehriMin17) - parseInt(3)));
        iftarMin__mym.innerHTML = iftarMin17 + 2;
        // Barisal Division
        sehriHour[2].innerHTML = sehriHour17;
        sehriMin__bari.innerHTML = addZero(parseInt(sehriMin17) + parseInt(2));
        iftarMin__bari.innerHTML = iftarMin17 - 1;
        // Khulna Division
        sehriHour[3].innerHTML = sehriHour17;
        sehriMin__kh.innerHTML = addZero(parseInt(sehriMin17) + parseInt(5));
        iftarMin__kh.innerHTML = iftarMin17 + 3;
        // Rajshahi Division
        sehriHour[4].innerHTML = sehriHour17;
        sehriMin__rj.innerHTML = addZero(parseInt(sehriMin17) + parseInt(5));
        iftarMin__rj.innerHTML = iftarMin17 + 5;
        // Rangpur Division
        sehriHour[5].innerHTML = sehriHour17;
        sehriMin__rn.innerHTML = sehriMin17;
        iftarMin__rn.innerHTML = iftarMin17;
        // Sylhet Division
        sehriHour[6].innerHTML = sehriHour17;
        sehriMin__sl.innerHTML = addZero(sixty(parseInt(sehriMin17) - parseInt(7)));
        iftarMin__sl.innerHTML = iftarMin17 - 4;
        // Chattogram Division
        sehriHour[7].innerHTML = sehriHour17;
        sehriMin__ch.innerHTML = sixty(parseInt(sehriMin17) - parseInt(2));
        iftarMin__ch.innerHTML = iftarMin17 - 7;
        
        // iftar time counter 
        var countdownfunction = setInterval(function() {

            var now = new Date().getTime();
            var gap = iftarTime[16] - now;
            if (gap > 0) {
                document.getElementById('coming-time').style.display = "block";
                
                var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
                document.getElementById("hour").innerHTML = addZero(hours);
                document.getElementById("minute").innerHTML = addZero(minutes);
                document.getElementById("second").innerHTML = addZero(seconds);
            
                // If the count down is over, write some text 
                if (gap < 0) {
                    clearInterval(countdownfunction);
                }
            }
        }, 1000);

    } 
    else {
        document.getElementById('ramadan').style.display = "none";
        document.getElementById('duwa').style.display = "none";
        document.getElementById('others').style.display = "block";
    }
} 


// Open modal 
var modalSahri  = document.getElementById('saherir-duwa');
var modaliftar  = document.getElementById('iftarer-duwa');
var sahriBtn    = document.getElementById('sahri-btn');
var iftarBtn    = document.getElementById('iftar-btn');
var closeBtn    = document.getElementsByClassName('close')[0];
var closeBtn2   = document.getElementsByClassName('close')[1];

// Shahri
sahriBtn.onclick = function() {
    modalSahri.style.visibility = "visible";
    modalSahri.style.opacity = "1";
};
closeBtn.onclick = function() {
    modalSahri.style.visibility = "hidden";
    modalSahri.style.opacity = "0";
};
window.onclick = function(event) {
    if (event.target == modalSahri) {
        modalSahri.style.visibility = "hidden";
        modalSahri.style.opacity = "0";
    }
};

// Iftar
iftarBtn.onclick = function() {
    modaliftar.style.visibility = "visible";
    modaliftar.style.opacity = "1";
};
closeBtn2.onclick = function() {
    modaliftar.style.visibility = "hidden";
    modaliftar.style.opacity = "0";
};
window.onclick = function(event) {
    if (event.target == modaliftar) {
        modaliftar.style.visibility = "hidden";
        modaliftar.style.opacity = "0";
    }
};


/*=====| 8. Count Down |=====*/
var iftarTime = [ramadanDay1.getTime(), ramadanDay2.getTime(), ramadanDay3.getTime(), ramadanDay4.getTime(), ramadanDay5.getTime(), ramadanDay6.getTime(), ramadanDay7.getTime(), ramadanDay8.getTime(), ramadanDay9.getTime(), ramadanDay10.getTime(), ramadanDay11.getTime(), ramadanDay12.getTime(), ramadanDay13.getTime(), ramadanDay14.getTime(), ramadanDay15.getTime(), ramadanDay16.getTime(), ramadanDay17.getTime(), ramadanDay18.getTime(), ramadanDay19.getTime(), ramadanDay20.getTime(), ramadanDay21.getTime(), ramadanDay22.getTime(), ramadanDay23.getTime(), ramadanDay24.getTime(),  ramadanDay25.getTime(), ramadanDay26.getTime(), ramadanDay27.getTime(), ramadanDay28.getTime(), ramadanDay29.getTime(), ramadanDay30.getTime()];

