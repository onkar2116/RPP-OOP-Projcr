class Rectangle :
    def __init__(self,l,w):
        self.len = l  
        self.wid = w


    def area(self):
        a = self.len*self.wid 
        print("the area of the rectangle is = {}".format(a))
    def parameter(self):
        p = 2*(self.len + self.wid)
        print("parameter of the rectangle is {}".format(p))   

    def change(self):
        self.len = int(input("Enter new length "))
        self.wid = int(input("Enter the new width "))
        print("Now our new length is {} ".format(self.len))
        print("Now our new width is {} ".format(self.wid))

    def printf(self):
        print("the length of a rectangle  is {} ".format(self.len))

        print("the Width of rectangle  is {} ".format(self.wid)) 






r = Rectangle(10,20)
r.printf()
r.area()
r.parameter()
r.change()
r.printf()
print()
print("after chageing the length and width ")
print()
r.area()
r.parameter()
r.printf()