from __future__ import unicode_literals
import unittest
from .example.course import Course


class TestCase(unittest.TestCase):
    """
    TestCase. This class should be allowed to unzip the
    example project and pass all the tests you code here.

    Remember. In order to implement the tests for your course,
    you will have to use `solution` method of the Course class
    imported!.
    """

    def test_course(self):
        """
        Code your tests here.
        """
        # self.assertEqual(Course.solution(), 300)  e.g
        pass


if __name__ == '__main__':
    unittest.main()
