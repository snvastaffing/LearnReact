import { useState } from "react"


const Instructors = (props) => {

    const [instructorState, setInstructorState]= useState(props.instructors)

    return (
        <>
            <section id="instructors" class="p-5 bg-primary">
                <div class="container">
                    <h2 class="text-center text-white">Our Instructors</h2>
                    <p class="lead text-center text-white mb-5">
                        Our instructors all have 5+ years working as a web developer in the
                        industry
                    </p>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded-circle mb-3" alt=""></img>
                                    <h3 class="card-title mb-3">John Doe</h3>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                                    </p>
                                    <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                                    <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}