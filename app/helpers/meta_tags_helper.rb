module MetaTagsHelper
  def meta_title
    content_for?(:meta_title) ? content_for(:meta_title) : DEFAULT_META["meta_title"]
  end

  def meta_description
    content_for?(:meta_description) ? content_for(:meta_description) : DEFAULT_META["meta_description"]
  end

  def meta_image
    meta_image = (content_for?(:meta_image) ? content_for(:meta_image) : DEFAULT_META["meta_image"])
    # little twist to make it work equally with an asset or a url
    meta_image.starts_with?("http") ? meta_image : image_url(meta_image)
  end

  def meta_video
    meta_video = (content_for?(:meta_video) ? content_for(:meta_video) : DEFAULT_META["meta_video"])
    # little twist to make it work equally with an asset or a url
    meta_video.starts_with?("http") ? meta_video : video_url(meta_video)
  end

  def meta_url
    content_for?(:meta_url) ? content_for(:meta_url) : DEFAULT_META["meta_url"]
  end
end
