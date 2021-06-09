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

    convertTimeToDayAndMonth(UNIX_timestamp){
        // console.log("Date: "+UNIX_timestamp)
        var months = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Sebtembar','Oktobar','Novembar','Decembar'];
        var a = new Date(UNIX_timestamp * 1000);
        // console.log("Date: "+JSON.stringify(a))
        const day = a.getDate()<10 ? '0'+a.getDate():a.getDate()
        return day + ". " + months[a.getMonth()];
    }

    convertTimeToDayOfWeek(UNIX_timestamp){
        // console.log("Date: "+UNIX_timestamp)
        var dayOfWeek = ['Nedelja','Ponedeljak','Utorak','Sreda','Četvrtak','Petak','Subota'];
        var a = new Date(UNIX_timestamp * 1000);
        // console.log("Date: "+JSON.stringify(a))
        return dayOfWeek[a.getDay()];
    }

    convertFromString(stringDate){
        const t = stringDate.indexOf('T');
        const date = new Date(stringDate.substring(0,t))
        return this.convertTimeToDayAndMonth(date.getTime()/1000);
    }
}

export default TimeConverter