# Local HTTPS Development Certificates

This guide explains how to set up HTTPS for local development using `mkcert` .

## Install `mkcert`

This is for Windows.

```bash
choco install mkcert
```

## Setup Instructions

### 1. Install local CA

- Install `mkcert`'s local CA (Certificate Authority):
- Do it once per machine on admin command prompt.

```bash
mkcert -install
```

### 2. Generate Certificates

- Generate certificates for localhost domains:
- Do this once per project inside the project directory's `_certs` folder.

```bash
mkcert localhost 127.0.0.1 ::1
```

This will create two files in the current directory:
- `localhost+2.pem` (certificate)
- `localhost+2-key.pem` (private key)

### 3. Save the certificates

Move the 2 files inside the `_certs` directory.

## Important Notes

- Keep the generated certificates in the `certs` directory
- Never commit the certificate files to version control
- Add `*.pem` to your `.gitignore` file
- Regenerate certificates if they expire (usually valid for 825 days)

## Troubleshooting

If you see certificate warnings:
1. Ensure mkcert's root CA is properly installed
2. Try running `mkcert -install` again
3. Restart your browser
4. Verify the paths to your certificate files are correct

## Security Note

These certificates are for development purposes only. Never use them in production environments.
