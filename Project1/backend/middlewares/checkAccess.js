const checkAccess = (requiredRole) => {
   return (req, res, next) => {
      try {
         if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" })
         }

         if (requiredRole !== req.user.role) {
            return res.status(403).json({
               message: `Access denied. Only ${requiredRole} allowed`
            })
         }

         next()

      } catch (error) {
         res.status(500).json({
            message: "Access check failed",
            error: error.message
         })
      }
   }
}

module.exports = checkAccess
