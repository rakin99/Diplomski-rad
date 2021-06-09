package com.ftn.diplomski.tools;

import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

public class DateDeserializer implements JsonDeserializer<Date>{

	@Override
	  public Date deserialize(JsonElement element, Type arg1, JsonDeserializationContext arg2) throws JsonParseException {
	      String date = element.getAsString();
	      SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
	      if(!element.toString().contains("T")) {
	    	  return new Date(Long.parseLong(element.toString())*1000);
	      }

	      try {
	          return format.parse(date);
	      } catch (ParseException exp) {
	          System.err.println(exp.getMessage());
	          return null;
	      }
	   }

}
