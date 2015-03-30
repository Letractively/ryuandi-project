/*
 * jQuery Anti Adblock
 * @copyright Hendriono http://modification-blog.blogspot.com
 * @version 1.00 (9 Maret 2011)
 * @Modif by Blog Mr.Cuy
 */
var standby = false;

function CekBlok() {
    if ($(".adsantilok").height() == "0") {
        TutupHalaman();
    }
}

function TutupHalaman() {
    if (!standby) {
        var h = 0;
        h = jQuery(window).height();
        jQuery("#energysaving").show().css({
            height: "0",
            width: "0",
            left: "50%",
            top: "50%"
        }).animate({
            width: "100%",
            height: h,
            left: "0",
            top: "0",
            opacity: "1"
        }, 1000);
        standby = true;
    }
}
document.write('<link rel="stylesheet" href="'+ linkcss +'" type="text/css">');

function jAntiBlock() {
    jQuery(function () {
        jQuery(document).ready(function () {
            setTimeout("CekBlok();", 1000);
            jQuery("body").append('<div id="energysaving"><p>Anda tidak suka iklan?<br /><span>SAYA JUGA!. <br/>Tapi anda harus tahu bahwa iklan sangat membantu blog ini agar tetap bertahan, dan membuat saya termotivasi untuk menulis tutorial dan membagikan Software Full Version Gratis untuk anda.<br/> Mohon pertimbangannya untuk menonaktifkan perangkat lunak blokir iklan (misal: Adblock) khusus untuk blog ini. <br/><i>Setelah Anda menonaktifkan AdBlock, maka otomatis artikel yang Anda baca akan terbuka kembali.</i><br/> Sebagai ucapan terima kasih, saya akan memberikan apresiasi yang setinggi-tingginya jika suatu hari kita bertemu dikehidupan nyata.<br/><br/>' + adminblog + '</span></p><div id="copyrightOnlineLeaf">Copyright 2015 <font style="color: #666666;"> Blog Mr.Cuy and DH</font> - All rights reserved</div></div>');
        });
    });
}
jAntiBlock();