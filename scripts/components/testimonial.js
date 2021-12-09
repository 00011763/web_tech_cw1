import { createElementFromHtml } from "../functions.js"

// Fetching data from Feedback.json
const fetched = await fetch("/feedback.json")
const feedbacks = await fetched.json()

const testimonials = []
for (let feedback of feedbacks) {
  let testimonial = createElementFromHtml(`
    <div class="testimonial">
      <div class="testimonial-details">
        <h2>${feedback.title}</h2>
        <p>
          ${feedback.content}
        </p>
      </div>
      <div class="testimonial-thumb">
        <img src="${feedback.avatar}" alt="" />
        <h3>${feedback.author}</h3>
        <h4>${feedback.position}</h4>
      </div>
    </div>
  `)
  testimonials.push(testimonial)
}

export { testimonials }