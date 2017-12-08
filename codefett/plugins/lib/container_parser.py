import docker


class ContainerParserMixin:
    """
    This Mixin contains the functions that need to be overridden on each parser for each Plugin.
    """
    def __init__(self, plugin_path, image_name):
        self.plugin_path = plugin_path
        self.image_name = image_name
        self.passed_tests = 0
        self.failed_tests = 0
        self.client = docker.from_env()
        self.container_result = None
        self.image = None

    async def build_image(self):
        dockerfile = open('./Dockerfile', 'r')
        self.image = self.client.images.build(fileobj=dockerfile, tag=self.image_name, nocache=True)
        dockerfile.close()

    async def run_container(self):
        self.client.containers.run(image=self.image, auto_remove=True)

    def parse_result(self):
        raise NotImplementedError

    def get_passed_tests(self):
        return self.passed_tests

    def get_failed_tests(self):
        return self.failed_tests
