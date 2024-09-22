using Application.Interfaces;
using Application.Features.WorkItems;
using Moq;
using Core.Entities;

namespace BackendTests;

public class WorkItemServiceTests
{
    private Mock<IWorkItemRepository> _workItemRepositoryMock;
    private WorkItemService _workItemService;

    [SetUp]
    public void Setup()
    {
        _workItemRepositoryMock = new Mock<IWorkItemRepository>();
        _workItemService = new WorkItemService(_workItemRepositoryMock.Object);
    }

    [Test]
    public async Task AddWorkItem_ShouldReturnCreatedWorkItem()
    {
        // Arrange
            var workItem = new WorkItem { Name = "Test Work Item", Description = "Test Description", Deadline = new DateTime(2024, 09, 25) };
            _workItemRepositoryMock.Setup(repo => repo.AddWorkItem(workItem)).ReturnsAsync(workItem);

            // Act
            var result = await _workItemService.AddWorkItem(workItem);

            // Assert
            Assert.NotNull(result);
            Assert.AreEqual(workItem.Name, result.Name);
            Assert.AreEqual(workItem.Description, result.Description);
            Assert.AreEqual(workItem.Deadline, result.Deadline);
            _workItemRepositoryMock.Verify(repo => repo.AddWorkItem(workItem), Times.Once);
    }

    [Test]
        public async Task GetAllWorkItems_ShouldReturnListOfWorkItems()
        {
            // Arrange
            var workItems = new List<WorkItem>
            {
                new WorkItem { Id = new Guid(), Name = "Work Item 1", Description = "Description 1", Deadline = new DateTime(2024, 09, 25) },
                new WorkItem { Id = new Guid(), Name = "Work Item 2", Description = "Description 2", Deadline = new DateTime(2024, 09, 26) }
            };
            _workItemRepositoryMock.Setup(repo => repo.GetAllWorkItems()).ReturnsAsync(workItems);

            // Act
            var result = await _workItemService.GetAllWorkItems();

            // Assert
            Assert.NotNull(result);
            Assert.AreEqual(2, result.Count());
            _workItemRepositoryMock.Verify(repo => repo.GetAllWorkItems(), Times.Once);
        }
}