import {useLocalStore} from 'mobx-react';
import { renderHook} from '@testing-library/react-hooks';
import createAuthenticationStore from '../Authentication/AuthenticationStore';
import LocalStorage from '../../../util/LocalStorage';
jest.mock("../../../util/LocalStorage");
import Firebase from '../../../services/Firebase/Firebase';
jest.mock("../../../services/Firebase/Firebase");

describe("AuthenticationStore", () => {

    it("LoginGoogle ", async() => {
        

        const  store  = renderHook(() => useLocalStore(createAuthenticationStore));
        expect(store.result.current.loggedIn).toBe(false);
        //First Log in attempt fails
        await store.result.current.googleSignIn();
        expect(store.result.current.loggedIn).toBe(false);

        // Second Succeed
        await store.result.current.googleSignIn();
        expect(store.result.current.loggedIn).toBe('google');
        expect(store.result.current.picture).toBe('TestPicture');
        expect(store.result.current.userName).toBe('TestName');

        await store.result.current.logOut();
        expect(store.result.current.loggedIn).toBe(false);
        expect(store.result.current.picture).toBe('');
        expect(store.result.current.userName).toBe('');
    })

    it("LoginFacebook ", async() => {
        const  store  = renderHook(() => useLocalStore(createAuthenticationStore));
        expect(store.result.current.loggedIn).toBe(false);
        //First Log in attempt fails
        await store.result.current.facebookSignIn();
        expect(store.result.current.loggedIn).toBe(false);

        // Second Succeed
        await store.result.current.facebookSignIn();
        expect(store.result.current.loggedIn).toBe('facebook');
        expect(store.result.current.picture).toBe('TestPicture');
        expect(store.result.current.userName).toBe('TestName');

        await store.result.current.logOut();
        expect(store.result.current.loggedIn).toBe(false);
        expect(store.result.current.picture).toBe('');
        expect(store.result.current.userName).toBe('');
    })

  })