using System.Diagnostics.Contracts;
using Application.Interfaces;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkItemController: ControllerBase
    {
        private readonly IWorkItemService _workItemService;

        public WorkItemController(IWorkItemService workItemService)
        {
            _workItemService = workItemService;
        }

        [HttpGet]
        public async Task<ActionResult<List<WorkItem>>> GetWorkItem()
        {
            var workItems = await _workItemService.GetAllWorkItems();
            if(!workItems.Any())
                return NotFound("No work items found");
                
            return Ok(workItems);
        }

        [HttpPost]
        public async Task<ActionResult<WorkItem>> AddWorkItem(WorkItem workItem)
        {
            var createdWorkItem = await _workItemService.AddWorkItem(workItem);
            return CreatedAtAction(nameof(GetWorkItem), new { id = createdWorkItem.Id } , createdWorkItem);
        }
        
        
    }
}