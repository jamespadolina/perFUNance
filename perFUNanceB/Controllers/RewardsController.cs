﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using perFunanceb.Model;
using perFunanceb.Models;

namespace perFunanceb.Controllers
{
    [Produces("application/json")]
    [Route("api/Rewards")]
    public class RewardsController : Controller
    {
        private readonly perFunancebContext _context;

        public RewardsController(perFunancebContext context)
        {
            _context = context;
            
            
        }

        // GET: api/Rewards
        [HttpGet]
        public IEnumerable<Reward> GetRewards()
        {
            return _context.Rewards;
        }

        internal static Reward GetReward()
        {
            throw new NotImplementedException();
        }

        // GET: api/Rewards/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReward([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reward = await _context.Rewards.SingleOrDefaultAsync(m => m.Id == id);

            if (reward == null)
            {
                return NotFound();
            }

            return Ok(reward);
        }

        // PUT: api/Rewards/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReward([FromRoute] int id, [FromBody] Reward reward)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reward.Id)
            {
                return BadRequest();
            }

            _context.Entry(reward).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RewardExists(id))
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

        // POST: api/Rewards
        [HttpPost]
        public async Task<IActionResult> PostReward([FromBody] Reward reward)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Rewards.Add(reward);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReward", new { id = reward.Id }, reward);
        }

        // DELETE: api/Rewards/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReward([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reward = await _context.Rewards.SingleOrDefaultAsync(m => m.Id == id);
            if (reward == null)
            {
                return NotFound();
            }

            _context.Rewards.Remove(reward);
            await _context.SaveChangesAsync();

            return Ok(reward);
        }

        private bool RewardExists(int id)
        {
            return _context.Rewards.Any(e => e.Id == id);
        }
    }
}