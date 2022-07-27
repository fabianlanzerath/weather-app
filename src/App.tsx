import { Component, createEffect, createSignal, For, onMount } from 'solid-js'
import createGeolocation from './createGeolocation'
import { COLUMN, ICON, LIST_ITEM, MAIN, ROW, TEXT } from './shared.ui'

enum WeatherIcon {
  clearDay = 'clear-day',
  clearNight = 'clear-night',
  partlyCloudyDay = 'partly-cloudy-day',
  partlyCloudyNight = 'partly-cloudy-night',
  cloudy = 'cloudy',
  fog = 'fog',
  wind = 'wind',
  rain = 'rain',
  sleet = 'sleet',
  snow = 'snow',
  hail = 'hail',
  thunderstorm = 'thunderstorm',
}

const get_icon = (icon: WeatherIcon) => {
  switch (icon) {
    case WeatherIcon.partlyCloudyNight:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>partly-cloudy--night</title>
          <path d='M30,19a4.974,4.974,0,0,0-3.2061-4.6582A6.9711,6.9711,0,0,0,13.7578,12.9a13.1418,13.1418,0,0,1,.1314-8.52A1.015,1.015,0,0,0,12.98,3a.9825.9825,0,0,0-.1746.0156A13.0958,13.0958,0,0,0,14.63,28.9971c.164.0063.3281,0,.4907,0a13.0412,13.0412,0,0,0,10.29-5.0386A4.99,4.99,0,0,0,30,19ZM14.7034,26.9976a11.0945,11.0945,0,0,1-3.201-21.584,15.1817,15.1817,0,0,0,.8443,9.3676A4.9877,4.9877,0,0,0,15,24h7.6772a11.0991,11.0991,0,0,1-7.5561,2.9976C14.9827,26.9976,14.8428,27.0024,14.7034,26.9976ZM25,22H15a2.9945,2.9945,0,0,1-.6963-5.9082l.6587-.1572.0986-.67a4.9923,4.9923,0,0,1,9.878.0005l.0986.6695.6587.1572A2.9945,2.9945,0,0,1,25,22Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.sleet:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>sleet</title>
          <rect x='6' y='24' width='2' height='2' />
          <rect x='8' y='26' width='2' height='2' />
          <rect x='10' y='28' width='2' height='2' />
          <rect x='10' y='24' width='2' height='2' />
          <rect x='6' y='28' width='2' height='2' />
          <path d='M21,30a1,1,0,0,1-.8944-1.4474l2-4.0005a1,1,0,1,1,1.7888.8947l-2,4A.9981.9981,0,0,1,21,30Z' />
          <path d='M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.4973,6.4973,0,0,0,8.5,22h8.8818L16.106,24.5527a1,1,0,1,0,1.7885.8946L19.6177,22H23.5A6.4974,6.4974,0,0,0,24.8008,9.1362ZM23.5,20H8.5a4.4975,4.4975,0,0,1-.356-8.981l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4975,4.4975,0,0,1,23.5,20Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.snow:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>cloud--snow</title>
          <path d='M23.5,22H8.5A6.5,6.5,0,0,1,7.2,9.14a9,9,0,0,1,17.6,0A6.5,6.5,0,0,1,23.5,22ZM16,4a7,7,0,0,0-6.94,6.14L9,11,8.14,11a4.5,4.5,0,0,0,.36,9h15a4.5,4.5,0,0,0,.36-9L23,11l-.1-.82A7,7,0,0,0,16,4Z' />
          <polygon points='12 25.05 10.95 24 9.5 25.45 8.05 24 7 25.05 8.45 26.5 7 27.95 8.05 29 9.5 27.55 10.95 29 12 27.95 10.55 26.5 12 25.05' />
          <polygon points='26 25.05 24.95 24 23.5 25.45 22.05 24 21 25.05 22.45 26.5 21 27.95 22.05 29 23.5 27.55 24.95 29 26 27.95 24.55 26.5 26 25.05' />
          <polygon points='19 27.05 17.95 26 16.5 27.45 15.05 26 14 27.05 15.45 28.5 14 29.95 15.05 31 16.5 29.55 17.95 31 19 29.95 17.55 28.5 19 27.05' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.clearNight:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>asleep</title>
          <path d='M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.wind:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>windy</title>
          <path d='M21,15H8V13H21a3,3,0,1,0-3-3H16a5,5,0,1,1,5,5Z' />
          <path d='M23,28a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V18H23a5,5,0,0,1,0,10Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.clearDay:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>sunny</title>
          <path
            d='M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z'
            transform='translate(0 0.0049)'
          />
          <rect
            x='6.8536'
            y='5.3745'
            width='1.9998'
            height='4.958'
            transform='translate(-3.253 7.8584) rotate(-45)'
          />
          <rect x='2' y='15.0049' width='5' height='2' />
          <rect
            x='5.3745'
            y='23.1466'
            width='4.958'
            height='1.9998'
            transform='translate(-14.7739 12.6305) rotate(-45)'
          />
          <rect x='15' y='25.0049' width='2' height='5' />
          <rect
            x='23.1466'
            y='21.6675'
            width='1.9998'
            height='4.958'
            transform='translate(-10.0018 24.1514) rotate(-45)'
          />
          <rect x='25' y='15.0049' width='5' height='2' />
          <rect
            x='21.6675'
            y='6.8536'
            width='4.958'
            height='1.9998'
            transform='translate(1.5191 19.3793) rotate(-45)'
          />
          <rect x='15' y='2.0049' width='2' height='5' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.cloudy:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>cloudy</title>
          <path d='M30.0005,15.5005a6.5324,6.5324,0,0,0-5.1992-6.3638,8.9943,8.9943,0,0,0-17.6006,0,6.5321,6.5321,0,0,0-5.2,6.3638,6.4543,6.4543,0,0,0,1.6887,4.35A5.9829,5.9829,0,0,0,8,30H19a5.9764,5.9764,0,0,0,5.6094-8.1016A6.5051,6.5051,0,0,0,30.0005,15.5005ZM19,28H8a3.9925,3.9925,0,0,1-.6731-7.9292L7.99,19.958l.1458-.6562a5.496,5.496,0,0,1,10.7294,0l.1458.6562.6626.1128A3.9925,3.9925,0,0,1,19,28Zm4.5-8h-.0554a5.9562,5.9562,0,0,0-2.7959-1.7564,7.4952,7.4952,0,0,0-14.2984,0,5.9877,5.9877,0,0,0-1.0315.4073A4.4446,4.4446,0,0,1,4,15.5005a4.5171,4.5171,0,0,1,4.144-4.481l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639a4.4975,4.4975,0,0,1-.3564,8.981Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.partlyCloudyDay:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>partly-cloudy</title>
          <rect x='27' y='15' width='4' height='2' />
          <rect
            x='23.0857'
            y='5.7938'
            width='4.2426'
            height='1.9998'
            transform='translate(2.5791 19.8139) rotate(-45)'
          />
          <rect x='15' y='1' width='2' height='4' />
          <rect
            x='4.6716'
            y='24.2078'
            width='4.2426'
            height='1.9998'
            transform='translate(-15.8349 12.1865) rotate(-45)'
          />
          <rect
            x='5.7931'
            y='4.6723'
            width='1.9998'
            height='4.2426'
            transform='translate(-2.8142 6.7932) rotate(-45)'
          />
          <rect x='1' y='15' width='4' height='2' />
          <path d='M26.7939,20.3418a6.9617,6.9617,0,0,0-1.8681-3.2671A8.485,8.485,0,0,0,25,16a9,9,0,1,0-14.585,7.0332A4.9771,4.9771,0,0,0,15,30H25a4.9947,4.9947,0,0,0,1.7939-9.6582ZM9,16a6.9955,6.9955,0,0,1,13.9849-.2969A6.8883,6.8883,0,0,0,20,15a7.04,7.04,0,0,0-6.7944,5.3418A4.986,4.986,0,0,0,11.5618,21.39,6.9675,6.9675,0,0,1,9,16ZM25,28H15a2.9945,2.9945,0,0,1-.6963-5.9082l.6587-.1572.0986-.67a4.9923,4.9923,0,0,1,9.878,0l.0986.6695.6587.1572A2.9945,2.9945,0,0,1,25,28Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.fog:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>fog</title>
          <path d='M24.8008,11.1382a8.9938,8.9938,0,0,0-17.6006,0A6.533,6.533,0,0,0,2,17.5H2V19a1,1,0,0,0,1,1H15a1,1,0,0,0,0-2H4v-.4966H4a4.5176,4.5176,0,0,1,4.144-4.4819l.8155-.064.0991-.812a6.9936,6.9936,0,0,1,13.8838,0l.0986.812.8154.064A4.4962,4.4962,0,0,1,23.5,22H7a1,1,0,0,0,0,2H23.5a6.4963,6.4963,0,0,0,1.3008-12.8618Z' />
          <rect x='2' y='26' width='18' height='2' rx='1' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.thunderstorm:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>cloud--lightning</title>
          <path d='M23.5,22H23V20h.5a4.5,4.5,0,0,0,.36-9L23,11l-.1-.82a7,7,0,0,0-13.88,0L9,11,8.14,11a4.5,4.5,0,0,0,.36,9H9v2H8.5A6.5,6.5,0,0,1,7.2,9.14a9,9,0,0,1,17.6,0A6.5,6.5,0,0,1,23.5,22Z' />
          <polygon points='15.87 30.5 14.13 29.5 17.28 24 11.28 24 16.13 15.5 17.87 16.5 14.72 22 20.72 22 15.87 30.5' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    case WeatherIcon.rain:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>cloud--rain</title>
          <path d='M23.5,22H8.5A6.5,6.5,0,0,1,7.2,9.14a9,9,0,0,1,17.6,0A6.5,6.5,0,0,1,23.5,22ZM16,4a7,7,0,0,0-6.94,6.14L9,11,8.14,11a4.5,4.5,0,0,0,.36,9h15a4.5,4.5,0,0,0,.36-9L23,11l-.1-.82A7,7,0,0,0,16,4Z' />
          <path d='M14,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,14,30Z' />
          <path d='M20,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,20,30Z' />
          <path d='M8,30a.93.93,0,0,1-.45-.11,1,1,0,0,1-.44-1.34l2-4a1,1,0,1,1,1.78.9l-2,4A1,1,0,0,1,8,30Z' />
          <rect class='cls-1' width='24' height='24' fill='none' />
        </svg>
      )
    case WeatherIcon.hail:
      return (
        <svg
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 32 32'
          fill='currentColor'
          class={ICON()}
        >
          <title>hail</title>
          <circle cx='21.4995' cy='29.5' r='1.5' />
          <circle cx='24.4995' cy='25.5' r='1.5' />
          <circle cx='7.5' cy='25.5' r='1.5' />
          <circle cx='4.4995' cy='29.5' r='1.5' />
          <circle cx='10.4995' cy='29.5' r='1.5' />
          <polygon points='15.868 30.496 14.132 29.504 17.276 24 11.277 24 16.132 15.504 17.868 16.496 14.723 22 20.724 22 15.868 30.496' />
          <path d='M23.5,22H23V20h.5a4.4975,4.4975,0,0,0,.3564-8.981l-.8154-.0639-.0986-.812a6.9938,6.9938,0,0,0-13.8838,0l-.0991.812-.8155.0639A4.4975,4.4975,0,0,0,8.5,20H9v2H8.5A6.4973,6.4973,0,0,1,7.2,9.1362a8.9943,8.9943,0,0,1,17.6006,0A6.4974,6.4974,0,0,1,23.5,22Z' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='&lt;Transparent Rectangle&gt;'
            class='cls-1'
            width='24'
            height='24'
            fill='none'
          />
        </svg>
      )
    default:
      break
  }
}

type Weather = {
  timestamp: string
  source_id: number
  precipitation: number
  pressure_msl: number
  sunshine: number
  temperature: number
  wind_direction: number
  wind_speed: number
  cloud_cover: number
  dew_point: number
  relative_humidity: number
  visibility: number
  wind_gust_direction: string
  wind_gust_speed: number
  condition: string
  fallback_source_ids: {
    wind_speed: number
    wind_direction: number
    wind_gust_speed: number
    cloud_cover: number
    pressure_msl: number
    condition: number
    visibility: number
  }
  icon: WeatherIcon
}

type WeatherSource = {
  id: number
  dwd_station_id: string
  wmo_station_id: string
  station_name: string
  observation_type: string
  first_record: string
  last_record: string
  lat: number
  lon: number
  height: number
  distance: number
}

interface IWeatherData {
  weather: Weather[]
  sources: WeatherSource[]
  readonly current_hours: number

  replace_null_by_zero(): void
  fetch_weather_data(geolocation: GeolocationPosition): Promise<void | Error>
  daily_high(): Weather
  daily_low(): Weather
  get_current_weather(): Weather
  get_weather_by_hour(hour: number): Weather
  get_forecast(): Weather[]
  get_current_weather_station(): WeatherSource
}

class WeatherData implements IWeatherData {
  weather!: Weather[]
  sources!: WeatherSource[]
  readonly current_hours!: number

  constructor(weather: Weather[] = [], sources: WeatherSource[] = []) {
    this.weather = weather
    this.sources = sources
    const now = new Date()
    this.current_hours =
      now.getHours() >= 2 ? now.getHours() - 2 : now.getHours()
  }

  replace_null_by_zero(): void {
    this.weather = JSON.parse(
      JSON.stringify(this.weather, (_, value) => (value === null ? 0 : value))
    )
    this.sources = JSON.parse(
      JSON.stringify(this.sources, (_, value) => (value === null ? 0 : value))
    )
  }

  async fetch_weather_data(
    geolocation: GeolocationPosition
  ): Promise<void | Error> {
    const now = new Date()
    const today = now.toISOString().slice(0, 10)
    const { latitude, longitude } = geolocation.coords

    return (
      await fetch(
        `https://api.brightsky.dev/weather?lat=${latitude}&lon=${longitude}&date=${today}`
      )
    )
      .json()
      .then(({ weather, sources }) => {
        this.weather =
          this.weather.length > 0
            ? [
                this.weather.copyWithin(
                  this.weather.length - 1,
                  0,
                  this.weather.length - 1
                ),
                ...weather,
              ]
            : weather
        this.sources = sources
        this.replace_null_by_zero()
      })
      .catch(error => Error(error))
  }

  daily_high(): Weather {
    const highest_temperature = Math.max.apply(
      null,
      this.weather.map(w => w.temperature)
    )

    return this.weather.find(w => w.temperature === highest_temperature)
  }

  daily_low(): Weather {
    const lowest_temperature = Math.min.apply(
      null,
      this.weather.map(w => w.temperature)
    )

    return this.weather.find(w => w.temperature === lowest_temperature)
  }

  get_current_weather(): Weather {
    return this.weather[this.current_hours]
  }

  get_weather_by_hour(hour: number): Weather {
    if (hour > 24 || hour < 0) Error('invalid hour')
    return this.weather[hour]
  }

  get_forecast(): Weather[] {
    return this.weather.slice(this.current_hours + 1, this.weather.length)
  }

  get_current_weather_station(): WeatherSource {
    return (
      this.sources.find(s => s.observation_type === 'current') ??
      this.sources[0]
    )
  }
}

const App: Component = () => {
  const weather = new WeatherData()
  const [fetched, setFetched] = createSignal<boolean>(false)

  onMount(async () => {
    await createGeolocation()
      .then(position => {
        weather
          .fetch_weather_data(position)
          .then(() => setFetched(true))
          .catch(error => {
            setFetched(false)
            Error(error)
          })
      })
      .catch(error => Error(error))
  })

  createEffect(() => console.log(weather))

  return (
    <main class={MAIN()}>
      {fetched() ? (
        <>
          <h3 class={TEXT({ variant: 'h2' })}>
            {weather.get_current_weather_station().station_name[0] +
              weather
                .get_current_weather_station()
                .station_name.slice(1)
                .toLocaleLowerCase()}
          </h3>
          <h6 class={TEXT({ variant: 'h1' })}>
            {weather.get_current_weather().temperature}°C
          </h6>

          <div class={ROW()}>
            <div class={ROW({ css: { alignItems: 'center' } })}>
              <svg
                id='icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 32 32'
                fill='currentColor'
                class={ICON()}
              >
                <polygon points='16 4 6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4' />
                <rect
                  id='_Transparent_Rectangle_'
                  data-name='&lt;Transparent Rectangle&gt;'
                  class='cls-1'
                  width='32'
                  height='32'
                  fill='none'
                />
              </svg>

              <p class={TEXT()}>{weather.daily_high().temperature}°C</p>

              {get_icon(weather.daily_high().icon)}
            </div>
            <div class={ROW({ css: { alignItems: 'center' } })}>
              <svg
                id='icon'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 32 32'
                fill='currentColor'
                class={ICON()}
              >
                <polygon points='24.59 16.59 17 24.17 17 4 15 4 15 24.17 7.41 16.59 6 18 16 28 26 18 24.59 16.59' />
                <rect
                  id='_Transparent_Rectangle_'
                  data-name='&lt;Transparent Rectangle&gt;'
                  class='cls-1'
                  width='32'
                  height='32'
                  fill='none'
                />
              </svg>

              <p class={TEXT()}>{weather.daily_low().temperature}°C</p>

              {get_icon(weather.daily_low().icon)}
            </div>
          </div>

          <div class={ROW({ css: { justifyContent: 'space-between' } })}>
            <div class={COLUMN({ css: { alignItems: 'center' } })}>
              <p class={TEXT({ variant: 'h5' })}>Luftfeuchte</p>
              <p class={TEXT({ variant: 'h4' })}>
                {weather.get_current_weather().relative_humidity} %
              </p>
            </div>
            <div class={COLUMN({ css: { alignItems: 'center' } })}>
              <p class={TEXT({ variant: 'h5' })}>Regen</p>
              <p class={TEXT({ variant: 'h4' })}>
                {weather.get_current_weather().precipitation} mm
              </p>
            </div>
            <div class={COLUMN({ css: { alignItems: 'center' } })}>
              <p class={TEXT({ variant: 'h5' })}>Wind</p>
              <p class={TEXT({ variant: 'h4' })}>
                {weather.get_current_weather().wind_speed} km/h
              </p>
            </div>
          </div>

          <For each={weather.get_forecast()}>
            {forecast => {
              return (
                <div class={LIST_ITEM()}>
                  <p class={TEXT()}>
                    {new Intl.DateTimeFormat('de-DE', {
                      timeStyle: 'short',
                    }).format(new Date(forecast.timestamp))}
                  </p>
                  {get_icon(forecast.icon)}
                  <p class={TEXT()}>{forecast.temperature}°C</p>
                </div>
              )
            }}
          </For>
        </>
      ) : (
        'Wetter-Daten werden geladen...'
      )}
    </main>
  )
}

export default App
