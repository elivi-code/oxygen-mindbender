import Avatar, { AvatarStack } from '.';

describe('avatar component exports', () => {
  it('should have an Avatar export', () => {
    expect(Avatar).toBeDefined();
  });

  it('should have an AvatarStack export', () => {
    expect(AvatarStack).toBeDefined();
  });
});
