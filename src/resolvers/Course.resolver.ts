import { Course } from '@entity/Course.entity'
import { Query, Resolver } from 'type-graphql'

@Resolver(Course)
export class CourseResolver {
  @Query(() => [Course])
  async courses(): Promise<Course[]> {
    return await Course.find()
  }
}