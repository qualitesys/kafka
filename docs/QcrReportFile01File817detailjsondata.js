console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java 33 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#67"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;List<AppConfigurationEntry>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#76"
 , "c1" : "void"
 , "c2" : "init(AccessTokenRetriever;AccessTokenValidator)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#91"
 , "c1" : "AccessTokenRetriever"
 , "c2" : "getAccessTokenRetriever()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#96"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#107"
 , "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#121"
 , "c1" : "void"
 , "c2" : "handleTokenCallback(OAuthBearerTokenCallback)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#134"
 , "c1" : "void"
 , "c2" : "handleExtensionsCallback(SaslExtensionsCallback)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#167"
 , "c1" : "void"
 , "c2" : "checkInitialized()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class OAuthBearerLoginCallbackHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method configure arguments Map&lt;String ,? &gt;  configs|String  saslMechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method configure list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.Object&gt; JaasOptionsUtils_getOptionsN196662|org.apache.kafka.common.security.oauthbearer.secured.AccessTokenRetriever AccessTokenRetrieverFactory_createN196778|org.apache.kafka.common.security.oauthbearer.secured.AccessTokenValidator AccessTokenValidatorFactory_createN196916"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method init arguments AccessTokenRetriever  accessTokenRetriever|AccessTokenValidator  accessTokenValidator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument accessTokenRetriever is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.init@POLYN197117 the MagicNumber/String  'The OAuth login configuration encountered an error when initializing the AccessTokenRetriever' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.init@POLYN197117 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN197744 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN197744 the MagicNumber/String  'The OAuth login configuration encountered an error when closing the AccessTokenRetriever' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method handleTokenCallback arguments OAuthBearerTokenCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN198699 the MagicNumber/String  'invalid_token' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN198699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method handleExtensionsCallback arguments SaslExtensionsCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00134] For method handleExtensionsCallback list of called methods Object monObjet|java.lang.String String_valueOfN200183"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.checkInitialized@POLYN200796 the MagicNumber/String  'To use %s, first call the configure or init method' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN198699"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN197744"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN198699 the MagicNumber/String 'invalid_token' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleTokenCallback@POLYN198699 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN197744 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.close@POLYN197744 the MagicNumber/String 'The OAuth login configuration encountered an error when closing the AccessTokenRetriever' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/OAuthBearerLoginCallbackHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
