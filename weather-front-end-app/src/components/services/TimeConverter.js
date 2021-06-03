class TimeConverter{

    convertTime(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var hour = a.getHours()<10 ? '0'+a.getHours():a.getHours();
        var min = a.getMinutes()<10 ? '0'+a.getMinutes():a.getMinutes();
        var time = hour + ":" + min + 'h';
        return time;
    }

    convertTimeWithoutMinute(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        return a.getHours();
    }

    convertTimeToDate(UNIX_timestamp){
        // console.log("Date: "+UNIX_timestamp)
        var months = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Sebtembar','Oktobar','Novembar','Decembar'];
        var a = new Date(UNIX_timestamp * 1000);
        // console.log("Date: "+JSON.stringify(a))
        return a.getDate() + ". " + months[a.getMonth()] + " " + a.getFullYear() + ".";
    }
}

export default TimeConverter