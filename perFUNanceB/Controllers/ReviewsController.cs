﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using perFunanceb.Models;
using perFunanceb.Model;

namespace perFunanceb.Controllers
{
    [Produces("application/json")]
    [Route("api/Reviews")]
    public class ReviewsController : Controller
    {
        private readonly perFunancebContext _context;

        public ReviewsController(perFunancebContext context)
        {
            _context = context;

            if(_context.Reviews.Count() == 0)
            {
                Review r1 = new Review();
                r1.UserId = 1;
                r1.SupervisorId = 9;
                r1.TotalPoints = 150;

                Review r2 = new Review();
                r2.UserId = 2;
                r2.SupervisorId = 10;
                r2.TotalPoints = 140;

                Review r3 = new Review();
                r3.UserId = 3;
                r3.SupervisorId = 11;
                r3.TotalPoints = 150;

                _context.Reviews.Add(r1);
                _context.SaveChanges();
                _context.Reviews.Add(r2);
                _context.SaveChanges();
                _context.Reviews.Add(r3);
                _context.SaveChanges();

            }
        }

        // GET: api/Reviews
        [HttpGet]
        public IEnumerable<Review> GetReviews()
        {
            return _context.Reviews;
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReview([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var review = await _context.Reviews.SingleOrDefaultAsync(m => m.Id == id);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        // PUT: api/Reviews/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReview([FromRoute] int id, [FromBody] Review review)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != review.Id)
            {
                return BadRequest();
            }

            _context.Entry(review).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reviews
        [HttpPost]
        public async Task<IActionResult> PostReview([FromBody] Review review)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReview", new { id = review.Id }, review);
        }

        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var review = await _context.Reviews.SingleOrDefaultAsync(m => m.Id == id);
            if (review == null)
            {
                return NotFound();
            }

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();

            return Ok(review);
        }

        private bool ReviewExists(int id)
        {
            return _context.Reviews.Any(e => e.Id == id);
        }
    }
}