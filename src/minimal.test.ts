import { Typegoose, arrayProp } from 'typegoose'

describe('minimal test', () => {
  test('array props', () => {
    enum TestEnum {
      HELLO1 = 'Hello 1',
      HELLO2 = 'Hello 2',
    }

    class TestEnumArray extends Typegoose {
      @arrayProp({ items: String, enum: TestEnum })
      public someValue: TestEnum[]
    }

    const model = new TestEnumArray().getModelForClass(TestEnumArray)

    expect(model).not.toBeUndefined()
  })
})