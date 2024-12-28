import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'cualquiercosa';

  const newRequest = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`),
  });

  return next(newRequest);
};
