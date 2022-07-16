import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Sodré</Text>
          <Text color="gray.300" fontSize="small">
            lucas.sodresa@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Sodré"
        src="https://github.com/lucassodresa.png"
      />
    </Flex>
  );
};
