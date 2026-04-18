import { useActionState } from 'react';
import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from '../util/validation';

function signupAction(prevFormState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');
  const fistName = formData.get('first-name');
  const lastName = formData.get('last-name');
  const role = formData.get('role');
  const terms = formData.get('terms');
  const acquisitionChannels = formData.getAll('acquisition');

  const errors = [];

  if (!isEmail(email)) {
    errors.push('Please provide a valid email.');
  }

  if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
    errors.push('Please provide a password with at least six characters.');
  }

  if (!isEqualToOtherValue(password, confirmPassword)) {
    errors.push('Passwords do not match.');
  }

  if (!isNotEmpty(fistName) || !isNotEmpty(lastName)) {
    errors.push('Please provide both your first and last name.');
  }

  if (!isNotEmpty(role)) {
    errors.push('Please select a role.');
  }

  if (!terms) {
    errors.push('You must agree to the terms and conditions.');
  }

  if (acquisitionChannels.length === 0) {
    errors.push('Please select at least one acquisition channel.');
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        email,
        password,
        confirmPassword,
        fistName,
        lastName,
        role,
        acquisitionChannels,
        terms,
      }
    };
  }

  return { errors: null };
}

export default function Signup() {
  const [formState, formAction] = useActionState(signupAction, { errors: null });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={formState.enteredValues?.password}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            name="first-name"
            defaultValue={formState.enteredValues?.fistName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState.enteredValues?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            id="google"
            type="checkbox"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannels.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            id="friend"
            type="checkbox"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannels.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            id="other"
            type="checkbox"
            name="acquisition"
            value="other"
            defaultChecked={formState.enteredValues?.acquisitionChannels.includes('other')}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            id="terms-and-conditions"
            type="checkbox"
            name="terms"
            defaultChecked={formState.enteredValues?.terms}
          />I
          agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className="error">
          {formState.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
