import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="ContactContainer">

        <h2>Contact Us</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
          <div class="form-group my-2">
            <label for="exampleFormControlTextarea1">Send your query</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
    </>
  )
}
