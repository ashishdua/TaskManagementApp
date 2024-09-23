using Application.Interfaces;
using Application.Features.WorkItems;
using Moq;
using Core.Entities;

namespace BackendTests
{
    public class WorkItemServiceTests
    {
        private WorkItemService _workItemService;
        private Mock<IWorkItemRepository> _mockWorkItemRepository;

        [SetUp]
        public void Setup()
        {
            _mockWorkItemRepository = new Mock<IWorkItemRepository>();
            _workItemService = new WorkItemService(_mockWorkItemRepository.Object);
        }

        [Test]
        public void Should_Add_WorkItem_With_Valid_Details()
        {
            // Arrange
            var newWorkItem = new WorkItem
            {
                Name = "New Work Item",
                Description = "New Description",
                Deadline = DateTime.Parse("2024-10-01")
            };

            _mockWorkItemRepository.Setup(r => r.AddWorkItem(newWorkItem)).Verifiable();

            // Act
            _workItemService.AddWorkItem(newWorkItem);

            // Assert
            _mockWorkItemRepository.Verify(r => r.AddWorkItem(It.Is<WorkItem>(w => w.Name == "New Work Item")));
        }

    [Test]
    public async Task GetWorkItems_ShouldReturnListOfWorkItems()
    {
        // Arrange
        var workItems = new List<WorkItem>
        {
            new WorkItem { Id = new Guid(), Name = "Work Item 1", Description = "Description 1", Deadline = DateTime.Now },
            new WorkItem { Id = new Guid(), Name = "Work Item 2", Description = "Description 2", Deadline = DateTime.Now }
        };
        _mockWorkItemRepository.Setup(repo => repo.GetAllWorkItems()).ReturnsAsync(workItems);

        // Act
        var result = await _workItemService.GetAllWorkItems();

        // Assert
        Assert.That(result, Is.EqualTo(workItems));
        _mockWorkItemRepository.Verify(repo => repo.GetAllWorkItems(), Times.Once);
    }
    }
}