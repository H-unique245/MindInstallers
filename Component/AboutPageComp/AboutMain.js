import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  function AboutMain() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Meeting scheduling{' '}
            <Text as={'span'} color={'orange.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = () => {
    return (
      <Icon
        width="100%"
        viewBox="0 0 702 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        
         
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M436.085 430.641C435.993 430.498 435.928 430.337 435.89 430.16C433.051 415.718 429.25 405.834 424.947 399.276C420.821 392.987 416.265 389.835 411.706 388.716C402.51 386.452 393.463 392.317 388.43 396.418C386.137 398.282 384.403 400.105 384.403 400.105C384.141 400.43 383.731 400.628 383.281 400.607C382.53 400.569 381.946 399.928 381.984 399.177C381.984 399.156 381.953 398.743 382.383 398.268C382.673 397.951 384.243 396.305 386.707 394.298C392.235 389.791 402.25 383.577 412.358 386.063C417.453 387.316 422.616 390.744 427.229 397.777C430.297 402.451 433.136 408.75 435.566 417.111C435.467 422.147 435.457 428.333 436.085 430.641ZM412.382 282.631C412.382 282.631 407.959 293.748 405.233 300.61C403.598 304.714 405.305 309.391 409.191 311.484C410.962 312.444 412.757 313.154 414.573 313.601C417.036 314.216 419.647 313.656 421.647 312.092C423.65 310.525 424.817 308.125 424.817 305.581C424.817 296.974 424.817 283.133 424.817 283.133C424.817 282.382 424.206 281.768 423.452 281.768C422.701 281.768 422.087 282.382 422.087 283.133C422.087 283.133 422.087 296.974 422.087 305.581C422.087 307.285 421.305 308.889 419.964 309.938C418.627 310.989 416.88 311.361 415.228 310.952C413.627 310.556 412.051 309.927 410.488 309.081C407.816 307.643 406.649 304.434 407.768 301.621C410.498 294.758 414.921 283.638 414.921 283.638C415.197 282.939 414.856 282.143 414.156 281.867C413.453 281.587 412.662 281.928 412.382 282.631ZM441.603 309.726C441.644 311.293 441.691 312.454 441.691 312.454C441.691 312.454 441.91 312.43 442.302 312.372C440.616 312.717 439.057 312.864 437.593 312.85C436.839 312.843 436.235 312.225 436.242 311.474C436.249 310.719 436.863 310.112 437.617 310.119C438.859 310.129 440.18 310.006 441.603 309.726ZM490.544 269.439C491.052 270.207 491.428 271.068 491.677 271.972C486.493 275.728 482.617 281.447 482.433 281.785C482.074 282.447 481.245 282.693 480.583 282.334C479.921 281.976 479.675 281.146 480.034 280.484C480.238 280.101 484.671 273.557 490.544 269.439ZM485.49 266.312C486.217 266.353 486.947 266.534 487.671 266.892C487.971 267.039 488.254 267.206 488.524 267.387C486.319 269.067 481.839 272.891 477.242 279.227C476.802 279.835 475.945 279.972 475.338 279.528C474.727 279.087 474.591 278.23 475.034 277.623C479.013 272.136 482.921 268.442 485.49 266.312ZM442.312 263.072C443.729 261.911 445.152 260.76 446.844 259.647C447.81 259.012 448.997 259.555 449.888 260.532C450.564 261.269 451.103 262.177 451.526 263.177C447.65 267.203 443.367 263.98 442.312 263.072Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="190.265"
            y1="345.577"
            x2="527.144"
            y2="147.032"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8D8D5" />
            <stop offset="0.42" stopColor="#CEE0DA" />
            <stop offset="1" stopColor="#FFF0E6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="79.5502"
            y1="106.847"
            x2="-86.7512"
            y2="315.127"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8D8D5" />
            <stop offset="0.47" stopColor="#CCDFDA" />
            <stop offset="1" stopColor="#FFF0E6" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="568.572"
            y1="150.967"
            x2="671.263"
            y2="250.917"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFBF2F" />
            <stop offset="1" stopColor="#FD9500" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="638.8"
            y1="337.91"
            x2="471.34"
            y2="225.092"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFBF2F" />
            <stop offset="0.48" stopColor="#FEB422" />
            <stop offset="1" stopColor="#FD9500" />
          </linearGradient>
        </defs>
      </Icon>
    );
  };

  export default AboutMain