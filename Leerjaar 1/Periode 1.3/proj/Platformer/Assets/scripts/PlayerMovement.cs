using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    //Movement speed Var
    public float speed = 25;

    //Rigidbody2D
    private Rigidbody2D rb;

    //Jump Variables
    public float jumpHeight = 400;
    public int jumpCount = 0;

    //Boolean for onground
    private bool onGround;
    void Start()
    {
        //Sets onGround to true so the player is able to jump
        onGround = true;

        //Rigidbody2D 
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        //If you press space and the jumpcount is lower then 2
        if (Input.GetKeyDown(KeyCode.Space) && jumpCount < 2)
        {
            //Makes the player jump
            rb.AddForce(Vector2.up * jumpHeight);

            //Adds + 1 to jumpcount 
            jumpCount++;

            //Test if you are on the ground
            Debug.Log(onGround);

            //Sets the boolean onGround on false
            onGround = false;
        }
        //Checks if onGround is true
        if (onGround == true)
        {
            //Resets the jump count so you can jump again
            jumpCount = 0;
        }

        //Checks if key "A" is pressed
        if (Input.GetKey(KeyCode.A))
        {
            //Moves the player Left
            transform.position -= transform.right * speed * Time.deltaTime;
        }
        //Checks if key "D" is pressed
        if (Input.GetKey(KeyCode.D))
        {
            //Moves the player Right
            transform.position += transform.right * speed * Time.deltaTime;
        }
    }

    //Function that checks if you have collided with something
    private void OnCollisionEnter2D(Collision2D coll)
    {
        //Checks if you Collide with the Ground or Platforms
        if (coll.gameObject.CompareTag("Ground") || coll.gameObject.CompareTag("Platform"))
        {
            //Sets the boolean onGround to true
            onGround = true;
        }
    }
}
