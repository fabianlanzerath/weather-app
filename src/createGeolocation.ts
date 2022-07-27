export default function () {
  return new Promise(
    (resolve: (value: GeolocationPosition) => void, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position)
        },
        (error: GeolocationPositionError) => {
          reject(error)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      )
    }
  )
}
