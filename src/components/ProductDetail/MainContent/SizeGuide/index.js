import React from 'react'
import {
  Container,
  TitleWrapper,
  Content,
  SizeWrapper,
  ChestWrapper
} from './styles'

export const SizeGuide = () => {
  return (
    <Container>
      <TitleWrapper>
        <div className='big' />
        <div className='small' />
        <div className='big' />
        <div className='small' />
        <div className='big' />
        <span>Size Guide</span>
        <div className='big' />
        <div className='small' />
        <div className='big' />
        <div className='small' />
        <div className='big' />
      </TitleWrapper>
      <Content>
        <SizeWrapper>
          <span className='title'>Size</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>2XL</span>
          <span>3XL</span>
          <span>4XL</span>
          <span>5XL</span>
        </SizeWrapper>
        <ChestWrapper>
          <span className='title'>Chest</span>
          <span>92</span>
          <span>102</span>
          <span>112</span>
          <span>122</span>
          <span>132</span>
          <span>142</span>
          <span>152</span>
          <span>162</span>
        </ChestWrapper>
        <ChestWrapper>
          <span className='title'>Length</span>
          <span>71</span>
          <span>74</span>
          <span>76</span>
          <span>79</span>
          <span>81</span>
          <span>84</span>
          <span>86</span>
          <span>88</span>
        </ChestWrapper>
      </Content>
    </Container>
  )
}
