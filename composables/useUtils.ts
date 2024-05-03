import nodemailer from "nodemailer"

export const useUtils = () => {
  const getPagePosition = () => {
    const currentPosition = ref("")

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
              currentPosition.value = entry.target.getAttribute("id")
            }
          })
        },
        {
          threshold: 1.0,
        }
      )

      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section)
      })
    })

    return currentPosition
  }
  return {
    getPagePosition,
  }
}
