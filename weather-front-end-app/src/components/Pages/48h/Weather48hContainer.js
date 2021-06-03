import React, { Component } from 'react'
import Content48h from './Content48h';

class Weather48hContainer extends Component{

    constructor(){
        super();
        this.state = {
            weather48h : {
                "lat": 45.2517,
                "lon": 19.8369,
                "timezone": "Europe/Belgrade",
                "timezone_offset": 7200,
                "hourly": [
                    {
                        "dt": 1622728800,
                        "temp": 23.19,
                        "feels_like": 22.56,
                        "pressure": 1023,
                        "humidity": 38,
                        "dew_point": 8.1,
                        "uvi": 3.38,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 4.69,
                        "wind_deg": 12,
                        "wind_gust": 5.84,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622732400,
                        "temp": 23.33,
                        "feels_like": 22.74,
                        "pressure": 1023,
                        "humidity": 39,
                        "dew_point": 8.61,
                        "uvi": 1.94,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 4.25,
                        "wind_deg": 16,
                        "wind_gust": 5.47,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622736000,
                        "temp": 23.01,
                        "feels_like": 22.41,
                        "pressure": 1023,
                        "humidity": 40,
                        "dew_point": 8.7,
                        "uvi": 0.76,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 3.31,
                        "wind_deg": 16,
                        "wind_gust": 4.9,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622739600,
                        "temp": 22.1,
                        "feels_like": 21.54,
                        "pressure": 1023,
                        "humidity": 45,
                        "dew_point": 9.62,
                        "uvi": 0.25,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 2.93,
                        "wind_deg": 24,
                        "wind_gust": 4.86,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622743200,
                        "temp": 19.9,
                        "feels_like": 19.36,
                        "pressure": 1023,
                        "humidity": 54,
                        "dew_point": 10.33,
                        "uvi": 0,
                        "clouds": 8,
                        "visibility": 10000,
                        "wind_speed": 2.71,
                        "wind_deg": 55,
                        "wind_gust": 4.74,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622746800,
                        "temp": 17.55,
                        "feels_like": 17.01,
                        "pressure": 1024,
                        "humidity": 63,
                        "dew_point": 10.43,
                        "uvi": 0,
                        "clouds": 14,
                        "visibility": 10000,
                        "wind_speed": 1.41,
                        "wind_deg": 66,
                        "wind_gust": 2.15,
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "местимични облаци",
                                "icon": "02n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622750400,
                        "temp": 15.35,
                        "feels_like": 14.77,
                        "pressure": 1025,
                        "humidity": 70,
                        "dew_point": 9.58,
                        "uvi": 0,
                        "clouds": 9,
                        "visibility": 10000,
                        "wind_speed": 0.66,
                        "wind_deg": 46,
                        "wind_gust": 0.97,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622754000,
                        "temp": 14.86,
                        "feels_like": 14.23,
                        "pressure": 1025,
                        "humidity": 70,
                        "dew_point": 9.15,
                        "uvi": 0,
                        "clouds": 6,
                        "visibility": 10000,
                        "wind_speed": 0.35,
                        "wind_deg": 18,
                        "wind_gust": 0.65,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622757600,
                        "temp": 14.55,
                        "feels_like": 13.89,
                        "pressure": 1024,
                        "humidity": 70,
                        "dew_point": 8.81,
                        "uvi": 0,
                        "clouds": 5,
                        "visibility": 10000,
                        "wind_speed": 0.68,
                        "wind_deg": 6,
                        "wind_gust": 0.81,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622761200,
                        "temp": 14.14,
                        "feels_like": 13.46,
                        "pressure": 1024,
                        "humidity": 71,
                        "dew_point": 8.67,
                        "uvi": 0,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 0.79,
                        "wind_deg": 11,
                        "wind_gust": 0.82,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622764800,
                        "temp": 13.71,
                        "feels_like": 13.02,
                        "pressure": 1024,
                        "humidity": 72,
                        "dew_point": 8.55,
                        "uvi": 0,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 0.57,
                        "wind_deg": 12,
                        "wind_gust": 0.68,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622768400,
                        "temp": 13.42,
                        "feels_like": 12.72,
                        "pressure": 1024,
                        "humidity": 73,
                        "dew_point": 8.48,
                        "uvi": 0,
                        "clouds": 5,
                        "visibility": 10000,
                        "wind_speed": 0.15,
                        "wind_deg": 123,
                        "wind_gust": 0.37,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622772000,
                        "temp": 13.19,
                        "feels_like": 12.5,
                        "pressure": 1024,
                        "humidity": 74,
                        "dew_point": 8.32,
                        "uvi": 0,
                        "clouds": 3,
                        "visibility": 10000,
                        "wind_speed": 0.46,
                        "wind_deg": 241,
                        "wind_gust": 0.53,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622775600,
                        "temp": 12.92,
                        "feels_like": 12.23,
                        "pressure": 1024,
                        "humidity": 75,
                        "dew_point": 8.37,
                        "uvi": 0,
                        "clouds": 3,
                        "visibility": 10000,
                        "wind_speed": 0.72,
                        "wind_deg": 263,
                        "wind_gust": 0.7,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622779200,
                        "temp": 13.84,
                        "feels_like": 13.21,
                        "pressure": 1025,
                        "humidity": 74,
                        "dew_point": 9.01,
                        "uvi": 0.18,
                        "clouds": 3,
                        "visibility": 10000,
                        "wind_speed": 0.97,
                        "wind_deg": 294,
                        "wind_gust": 0.97,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622782800,
                        "temp": 15.85,
                        "feels_like": 15.24,
                        "pressure": 1025,
                        "humidity": 67,
                        "dew_point": 9.51,
                        "uvi": 0.64,
                        "clouds": 2,
                        "visibility": 10000,
                        "wind_speed": 1.02,
                        "wind_deg": 326,
                        "wind_gust": 1.22,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622786400,
                        "temp": 17.67,
                        "feels_like": 17.11,
                        "pressure": 1025,
                        "humidity": 62,
                        "dew_point": 9.98,
                        "uvi": 1.57,
                        "clouds": 2,
                        "visibility": 10000,
                        "wind_speed": 1.06,
                        "wind_deg": 320,
                        "wind_gust": 1.08,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622790000,
                        "temp": 19.63,
                        "feels_like": 19.11,
                        "pressure": 1025,
                        "humidity": 56,
                        "dew_point": 10.43,
                        "uvi": 3.02,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 1.1,
                        "wind_deg": 333,
                        "wind_gust": 1.11,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622793600,
                        "temp": 21.24,
                        "feels_like": 20.75,
                        "pressure": 1025,
                        "humidity": 51,
                        "dew_point": 10.55,
                        "uvi": 4.71,
                        "clouds": 5,
                        "visibility": 10000,
                        "wind_speed": 1.4,
                        "wind_deg": 0,
                        "wind_gust": 1.61,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622797200,
                        "temp": 22.32,
                        "feels_like": 21.83,
                        "pressure": 1025,
                        "humidity": 47,
                        "dew_point": 10.15,
                        "uvi": 6.27,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 1.88,
                        "wind_deg": 22,
                        "wind_gust": 2.3,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622800800,
                        "temp": 23.2,
                        "feels_like": 22.67,
                        "pressure": 1024,
                        "humidity": 42,
                        "dew_point": 9.51,
                        "uvi": 7.35,
                        "clouds": 4,
                        "visibility": 10000,
                        "wind_speed": 2.13,
                        "wind_deg": 37,
                        "wind_gust": 2.51,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622804400,
                        "temp": 23.95,
                        "feels_like": 23.42,
                        "pressure": 1024,
                        "humidity": 39,
                        "dew_point": 8.98,
                        "uvi": 7.53,
                        "clouds": 6,
                        "visibility": 10000,
                        "wind_speed": 2.21,
                        "wind_deg": 56,
                        "wind_gust": 2.19,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622808000,
                        "temp": 24.38,
                        "feels_like": 23.84,
                        "pressure": 1024,
                        "humidity": 37,
                        "dew_point": 8.54,
                        "uvi": 6.82,
                        "clouds": 14,
                        "visibility": 10000,
                        "wind_speed": 1.95,
                        "wind_deg": 64,
                        "wind_gust": 2.08,
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "местимични облаци",
                                "icon": "02d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622811600,
                        "temp": 24.3,
                        "feels_like": 23.73,
                        "pressure": 1023,
                        "humidity": 36,
                        "dew_point": 8.2,
                        "uvi": 5.36,
                        "clouds": 63,
                        "visibility": 10000,
                        "wind_speed": 1.63,
                        "wind_deg": 75,
                        "wind_gust": 2.06,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622815200,
                        "temp": 23.87,
                        "feels_like": 23.33,
                        "pressure": 1023,
                        "humidity": 39,
                        "dew_point": 8.76,
                        "uvi": 3.68,
                        "clouds": 63,
                        "visibility": 10000,
                        "wind_speed": 1.58,
                        "wind_deg": 120,
                        "wind_gust": 1.9,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622818800,
                        "temp": 23.67,
                        "feels_like": 23.16,
                        "pressure": 1023,
                        "humidity": 41,
                        "dew_point": 9.34,
                        "uvi": 2.11,
                        "clouds": 63,
                        "visibility": 10000,
                        "wind_speed": 1.72,
                        "wind_deg": 149,
                        "wind_gust": 1.83,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622822400,
                        "temp": 23.31,
                        "feels_like": 22.82,
                        "pressure": 1023,
                        "humidity": 43,
                        "dew_point": 9.81,
                        "uvi": 0.94,
                        "clouds": 62,
                        "visibility": 10000,
                        "wind_speed": 1.43,
                        "wind_deg": 166,
                        "wind_gust": 1.55,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622826000,
                        "temp": 22.29,
                        "feels_like": 21.85,
                        "pressure": 1023,
                        "humidity": 49,
                        "dew_point": 10.7,
                        "uvi": 0.31,
                        "clouds": 60,
                        "visibility": 10000,
                        "wind_speed": 1.12,
                        "wind_deg": 180,
                        "wind_gust": 1.24,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622829600,
                        "temp": 20.36,
                        "feels_like": 19.84,
                        "pressure": 1023,
                        "humidity": 53,
                        "dew_point": 10.08,
                        "uvi": 0,
                        "clouds": 61,
                        "visibility": 10000,
                        "wind_speed": 1.04,
                        "wind_deg": 194,
                        "wind_gust": 1.18,
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "испрекидани облаци",
                                "icon": "04d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622833200,
                        "temp": 18.35,
                        "feels_like": 17.7,
                        "pressure": 1023,
                        "humidity": 56,
                        "dew_point": 9.33,
                        "uvi": 0,
                        "clouds": 6,
                        "visibility": 10000,
                        "wind_speed": 0.52,
                        "wind_deg": 197,
                        "wind_gust": 0.59,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622836800,
                        "temp": 17.63,
                        "feels_like": 16.99,
                        "pressure": 1024,
                        "humidity": 59,
                        "dew_point": 9.2,
                        "uvi": 0,
                        "clouds": 3,
                        "visibility": 10000,
                        "wind_speed": 0.26,
                        "wind_deg": 176,
                        "wind_gust": 0.45,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622840400,
                        "temp": 17.06,
                        "feels_like": 16.39,
                        "pressure": 1023,
                        "humidity": 60,
                        "dew_point": 9.06,
                        "uvi": 0,
                        "clouds": 2,
                        "visibility": 10000,
                        "wind_speed": 0.3,
                        "wind_deg": 56,
                        "wind_gust": 0.49,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622844000,
                        "temp": 16.37,
                        "feels_like": 15.68,
                        "pressure": 1023,
                        "humidity": 62,
                        "dew_point": 8.96,
                        "uvi": 0,
                        "clouds": 2,
                        "visibility": 10000,
                        "wind_speed": 0.75,
                        "wind_deg": 45,
                        "wind_gust": 0.81,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622847600,
                        "temp": 15.85,
                        "feels_like": 15.16,
                        "pressure": 1023,
                        "humidity": 64,
                        "dew_point": 8.96,
                        "uvi": 0,
                        "clouds": 1,
                        "visibility": 10000,
                        "wind_speed": 0.38,
                        "wind_deg": 93,
                        "wind_gust": 0.59,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622851200,
                        "temp": 15.49,
                        "feels_like": 14.82,
                        "pressure": 1023,
                        "humidity": 66,
                        "dew_point": 8.93,
                        "uvi": 0,
                        "clouds": 1,
                        "visibility": 10000,
                        "wind_speed": 0.54,
                        "wind_deg": 144,
                        "wind_gust": 0.58,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622854800,
                        "temp": 15.15,
                        "feels_like": 14.47,
                        "pressure": 1023,
                        "humidity": 67,
                        "dew_point": 8.87,
                        "uvi": 0,
                        "clouds": 0,
                        "visibility": 10000,
                        "wind_speed": 0.98,
                        "wind_deg": 128,
                        "wind_gust": 1.01,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622858400,
                        "temp": 14.88,
                        "feels_like": 14.2,
                        "pressure": 1022,
                        "humidity": 68,
                        "dew_point": 8.77,
                        "uvi": 0,
                        "clouds": 0,
                        "visibility": 10000,
                        "wind_speed": 1.4,
                        "wind_deg": 123,
                        "wind_gust": 1.44,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01n"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622862000,
                        "temp": 14.56,
                        "feels_like": 13.87,
                        "pressure": 1022,
                        "humidity": 69,
                        "dew_point": 8.72,
                        "uvi": 0,
                        "clouds": 0,
                        "visibility": 10000,
                        "wind_speed": 1.54,
                        "wind_deg": 128,
                        "wind_gust": 1.54,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622865600,
                        "temp": 15.29,
                        "feels_like": 14.68,
                        "pressure": 1022,
                        "humidity": 69,
                        "dew_point": 9.42,
                        "uvi": 0.19,
                        "clouds": 0,
                        "visibility": 10000,
                        "wind_speed": 1.39,
                        "wind_deg": 146,
                        "wind_gust": 1.39,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622869200,
                        "temp": 17.42,
                        "feels_like": 16.86,
                        "pressure": 1022,
                        "humidity": 63,
                        "dew_point": 10.15,
                        "uvi": 0.68,
                        "clouds": 1,
                        "visibility": 10000,
                        "wind_speed": 1.2,
                        "wind_deg": 152,
                        "wind_gust": 1.65,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622872800,
                        "temp": 19.4,
                        "feels_like": 18.88,
                        "pressure": 1022,
                        "humidity": 57,
                        "dew_point": 10.46,
                        "uvi": 1.67,
                        "clouds": 1,
                        "visibility": 10000,
                        "wind_speed": 1.53,
                        "wind_deg": 121,
                        "wind_gust": 1.88,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622876400,
                        "temp": 21.11,
                        "feels_like": 20.63,
                        "pressure": 1022,
                        "humidity": 52,
                        "dew_point": 10.76,
                        "uvi": 3.22,
                        "clouds": 3,
                        "visibility": 10000,
                        "wind_speed": 1.96,
                        "wind_deg": 107,
                        "wind_gust": 2.25,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622880000,
                        "temp": 22.52,
                        "feels_like": 22.08,
                        "pressure": 1021,
                        "humidity": 48,
                        "dew_point": 10.66,
                        "uvi": 5.04,
                        "clouds": 5,
                        "visibility": 10000,
                        "wind_speed": 2.33,
                        "wind_deg": 103,
                        "wind_gust": 2.5,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622883600,
                        "temp": 23.71,
                        "feels_like": 23.23,
                        "pressure": 1021,
                        "humidity": 42,
                        "dew_point": 9.7,
                        "uvi": 6.71,
                        "clouds": 7,
                        "visibility": 10000,
                        "wind_speed": 2.31,
                        "wind_deg": 103,
                        "wind_gust": 2.79,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622887200,
                        "temp": 24.5,
                        "feels_like": 24,
                        "pressure": 1021,
                        "humidity": 38,
                        "dew_point": 9.05,
                        "uvi": 7.85,
                        "clouds": 7,
                        "visibility": 10000,
                        "wind_speed": 2.29,
                        "wind_deg": 104,
                        "wind_gust": 2.6,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622890800,
                        "temp": 25.11,
                        "feels_like": 24.62,
                        "pressure": 1020,
                        "humidity": 36,
                        "dew_point": 8.95,
                        "uvi": 8.04,
                        "clouds": 6,
                        "visibility": 10000,
                        "wind_speed": 2.33,
                        "wind_deg": 102,
                        "wind_gust": 2.24,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622894400,
                        "temp": 25.61,
                        "feels_like": 25.14,
                        "pressure": 1020,
                        "humidity": 35,
                        "dew_point": 9.03,
                        "uvi": 7.28,
                        "clouds": 6,
                        "visibility": 10000,
                        "wind_speed": 2.58,
                        "wind_deg": 96,
                        "wind_gust": 2.14,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    },
                    {
                        "dt": 1622898000,
                        "temp": 25.79,
                        "feels_like": 25.34,
                        "pressure": 1019,
                        "humidity": 35,
                        "dew_point": 9.09,
                        "uvi": 5.74,
                        "clouds": 7,
                        "visibility": 10000,
                        "wind_speed": 2.64,
                        "wind_deg": 97,
                        "wind_gust": 2.01,
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "ведро небо",
                                "icon": "01d"
                            }
                        ],
                        "pop": 0
                    }
                ]
            },
            cityName:''
        }
    }

    componentDidMount(){
        console.log("componentDidMount u Weather48hContainer: "+this.props.searchPlace)
        const searchPlace = localStorage.getItem('searchPlace');
        if(this.props.searchPlace!==''){
            this.setState({
                cityName:this.props.searchPlace
            })
        }else if(searchPlace!=null){
            this.setState({
                cityName:searchPlace
            })
        }else{
            this.setState({
                cityName:'Novi Sad'
            })
        }
    }

    render(){
        return(
            <Content48h cityName = {this.state.cityName} weather48h={this.state.weather48h}/>
        )
    }
    
}

export default Weather48hContainer