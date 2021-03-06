import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-Memory/CategoriesRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CategoriesRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepository = new CategoriesRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "name Car",
      description: "description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "Category",
    });
  });
});
