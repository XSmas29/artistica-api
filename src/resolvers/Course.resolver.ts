import { Course } from '@entity/Course.entity'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver(Course)
export class CourseResolver {
  @Query(() => [Course])
  async courses(): Promise<Course[]> {
    return await Course.find()
  }

  @Query(() => Course)
  async courseDetail(
    @Arg('id') id: number,
  ): Promise<Course> {
    const course = await Course.createQueryBuilder('crs')
      .where('crs.id = :id', { id })
      .getOneOrFail()

    return course
  }
}