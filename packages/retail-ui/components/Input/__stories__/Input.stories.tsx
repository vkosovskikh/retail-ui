import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SearchIcon from '@skbkontur/react-icons/Search';

import Input from '../Input';
import Button from '../../Button';
import Gapped from '../../Gapped';

const styles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  minWidth: '90px',
  padding: '5px'
};

storiesOf('Input', module)
  .add('Inputs everywhere', () =>
    Array.from({ length: 2048 }).map((_, i) => (
      <span style={{ padding: '2px', display: 'inline-block' }}>
        <Input key={i} defaultValue={String(i).slice(0, 3)} width="50px" />
      </span>
    ))
  )
  .add('Inputs with different states', () => (
    <div>
      <div>
        <div style={styles}>Warning</div>
        <div id="warning-small-input-wrapper" style={styles}>
          <Input size="small" warning />
        </div>
        <div id="warning-large-input-wrapper" style={styles}>
          <Input size="large" warning />
        </div>
      </div>

      <div>
        <div style={styles}>Error</div>
        <div id="error-small-input-wrapper" style={styles}>
          <Input size="small" error />
        </div>
        <div id="error-large-input-wrapper" style={styles}>
          <Input size="large" error />
        </div>
      </div>

      <div>
        <div style={styles}>Disabled</div>
        <div id="disabled-small-input-wrapper" style={styles}>
          <Input size="small" disabled />
        </div>
        <div id="disabled-large-input-wrapper" style={styles}>
          <Input size="large" disabled />
        </div>
      </div>

      <div>
        <div style={styles}>
          Disabled
          <br /> (with text)
        </div>
        <div id="disabled-text-small-input-wrapper" style={styles}>
          <Input size="small" value="Some text" disabled />
        </div>
        <div id="disabled-text-large-input-wrapper" style={styles}>
          <Input size="large" value="Some text" disabled />
        </div>
      </div>

      <div>
        <div style={styles}>Placeholder</div>
        <div id="placeholder-small-input-wrapper" style={styles}>
          <Input size="small" placeholder="Placeholder" />
        </div>
        <div id="placeholder-large-input-wrapper" style={styles}>
          <Input size="large" placeholder="Placeholder" />
        </div>
      </div>

      <div>
        <div style={styles}>Password</div>
        <div id="password-small-input-wrapper" style={styles}>
          <Input size="small" value="password" type="password" />
        </div>
        <div id="password-large-input-wrapper" style={styles}>
          <Input size="large" value="password" type="password" />
        </div>
      </div>

      <div>
        <div style={styles}>Borderless</div>
        <div id="borderless-small-input-wrapper" style={styles}>
          <Input size="small" borderless />
        </div>
        <div id="borderless-large-input-wrapper" style={styles}>
          <Input size="large" borderless />
        </div>
      </div>

      <div>
        <div style={styles}>Left icon</div>
        <div id="left-icon-small-input-wrapper" style={styles}>
          <Input size="small" leftIcon={<SearchIcon />} />
        </div>
        <div id="left-icon-large-input-wrapper" style={styles}>
          <Input size="large" leftIcon={<SearchIcon />} />
        </div>
      </div>

      <div>
        <div style={styles}>Right icon</div>
        <div id="right-icon-small-input-wrapper" style={styles}>
          <Input size="small" rightIcon={<SearchIcon />} />
        </div>
        <div id="right-icon-large-input-wrapper" style={styles}>
          <Input size="large" rightIcon={<SearchIcon />} />
        </div>
      </div>
    </div>
  ))
  .add('Inputs with different sizes', () => (
    <div>
      <div id="small-input-wrapper" style={styles}>
        <Input size="small" />
      </div>
      <div id="medium-input-wrapper" style={styles}>
        <Input size="medium" />
      </div>
      <div id="large-input-wrapper" style={styles}>
        <Input size="large" />
      </div>
    </div>
  ))
  .add('Input with mask', () => (
    <Gapped vertical>
      <p>
        <span>Mask:</span> <span>+7 999 999-99-99</span>{' '}
        <Input
          width="150"
          mask="+7 999 999-99-99"
          maskChar={'_'}
          placeholder="+7"
          alwaysShowMask
        />
      </p>
      <p>
        <span>Mask:</span> <span>99aa9999</span>{' '}
        <Input
          width="150"
          mask="99aa9999"
          maskChar={'_'}
          placeholder="99aa9999"
        />
      </p>
    </Gapped>
  ))
  .add('Input with phone mask', () => (
    <Input
      width="150"
      mask="+7 999 999-99-99"
      maskChar={'_'}
      placeholder="+7"
      alwaysShowMask
    />
  ))
  .add('Select all by prop', () => (
    <Input defaultValue="Some value" selectAllOnFocus />
  ))
  .add('Select all by button', () => {
    let input: Input | null = null;

    const selectAll = () => {
      if (input) {
        input.selectAll();
      }
    };

    return (
      <div>
        <div>
          <Input ref={element => (input = element)} defaultValue="Some value" />
        </div>
        <Button onClick={selectAll}>Select all</Button>
      </div>
    );
  })
  .add('Input with maxLength attr', () => (
    <Input maxLength={3} placeholder="maxLength={3}" />
  ))
  .add('Manual blinking', () => {
    class Sample extends React.Component {
      private input: Input | null = null;

      public render() {
        return (
          <Gapped>
            <Input ref={this.refInput} />
            <button onClick={this.handleClick}>Blink!</button>
          </Gapped>
        );
      }

      private handleClick = () => {
        if (this.input) {
          this.input.blink();
        }
      };

      private refInput = (element: Input | null) => {
        this.input = element;
      };
    }

    return <Sample />;
  });
