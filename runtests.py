






if __name__ == "__main__"   :
    import sys
    import subprocess
    import os
    if len(sys.argv) != 2 :
        print("Usage: runTests.py file")
        sys.exit(1)
    import re
    inside = False
    val = ""
    codefile =sys.argv[1]
    if codefile.endswith(".ts") :
        # Compile the typescript file 
        sp = subprocess.run(["tsc", sys.argv[1]], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if sp.returncode != 0 :
            print("Error while compiling the typescript file", file=sys.stderr)
            print(sp.stderr.decode(), file=sys.stderr)
            sys.exit(1)
        codefile = codefile[:-3]+".js"
    found = False
    if not os.path.exists(codefile):
        print("File not found: "+codefile, file=sys.stderr)
        sys.exit(1)
    with open(codefile,"r") as f:
        for line in f.readlines():
            line =line.strip("\n")
            
            if line == "/* PL:checks_args_stdin==" :
                inside = True
                found = True
                continue
            if inside and line == "PL:== */" :
                inside = False
                continue
            if inside :
                val += line
    if not found:
        print("No tests found: no /* PL:checks_args_stdin== ... PL:== */ found in the file", file=sys.stderr)
        sys.exit(1)
    # if debug : print(val)     
    tests = eval(val)
    for test in tests :
        print("Running test: "+test[0])
        f_in=open("stdin_content", "w")
        f_in.write(test[2])
        f_in.close()
        # Use the teacher solution to generated expected output of the test
        command_args = " ".join(["node",sys.argv[1]] + list(map(lambda x: "'"+x+"'", test[1])) )
        print(command_args)
        try: 
            sp = subprocess.run(command_args, stdin=open("stdin_content", "r"), stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True, timeout=1)
            expected_ouput = sp.stdout.decode().replace(' ', ' ') + sp.stderr.decode().replace(' ', ' ')
        except:
            expected_ouput = "Impossible de décoder la sortie standard"
        if sp.returncode < 0:
            expected_ouput += "Process exited with UNIX signal ("+str(-sp.returncode)+")"
        print("Output: \n"+expected_ouput)

    sys.exit(0)
