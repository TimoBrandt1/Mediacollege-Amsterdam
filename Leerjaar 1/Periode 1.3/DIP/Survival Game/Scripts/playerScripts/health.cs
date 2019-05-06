using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class health : MonoBehaviour
{
    public Texture aTexture;
    public int amountOfHearts = 5;

    void OnGUI()
    {
        if (!aTexture)
        {
            Debug.LogError("Assign a Texture in the inspector.");
            return;
        }
        for (int i = 0; i < amountOfHearts; i++)
        {
            GUI.DrawTexture(new Rect(50 * i, 10, 60, 60), aTexture, ScaleMode.ScaleToFit, true, 1.0F);
        }
        
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        if (amountOfHearts <= 0)
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }
    }
}
