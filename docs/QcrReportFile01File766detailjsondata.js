console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java 34 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.authenticator.LoginManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.authenticator.LoginManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#55"
 , "c1" : "LoginManager"
 , "c2" : "LoginManager(JaasContext;String;Map<String,?>;LoginMetadata<?>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "LoginManager"
 , "c2" : "acquireLoginManager(JaasContext;String;Class<?extendsLogin>;Map<String,?>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "Subject"
 , "c2" : "subject()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "String"
 , "c2" : "serviceName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "Object"
 , "c2" : "cacheKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "LoginManager"
 , "c2" : "acquire()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c1" : "void"
 , "c2" : "release()"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c1" : "void"
 , "c2" : "closeAll()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.svg" }

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
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File766Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=766&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN617315.return" , "java.util.HashMap.put@POLYN620675.value"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00247]"
 , "c3" : ["java.util.HashMap.get@POLYN617315.return" , "---java.util.HashMap.get@POLYN617315" , "org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956.loginManager"]
 , "c4" : "//QC-JAVCWE099[00247] In org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956[00247] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00247]"
 , "c3" : ["org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956.loginManager" , "---java.util.HashMap.put@POLYN620675" , "java.util.HashMap.put@POLYN620675.value"]
 , "c4" : "//QC-JAVCWE099[00247] In org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956[00247] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "22"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument jaasContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument loginMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method acquireLoginManager arguments JaasContext  jaasContext|String  saslMechanism|Class&lt;?  extends Login &gt;  defaultLoginClass|Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00247] For method acquireLoginManager list of called methods Object monObjet|boolean OAuthBearerLoginModule_OAUTHBEARER_MECHANISM_equalsN183434|org.apache.kafka.common.config.types.Password jaasContext_dynamicJaasConfigN183901|V DYNAMIC_INSTANCES_getN184216|V STATIC_INSTANCES_getN184843"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00247] The argument jaasContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00247] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.security.authenticator.LoginManager.acquireLoginManager@POLYN182956 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.security.authenticator.LoginManager.acquire@POLYN185673 the MagicNumber/String  '{} acquired' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00247] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.security.authenticator.LoginManager.release@POLYN185945 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.release@POLYN185945 the MagicNumber/String  'release() called on disposed ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.release@POLYN185945 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.release@POLYN185945 the MagicNumber/String  '{} released' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.toString@POLYN186765 the MagicNumber/String  'LoginManager(serviceName=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.toString@POLYN186765 the MagicNumber/String  ', publicCredentials=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.toString@POLYN186765 the MagicNumber/String  ', refCount=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.toString@POLYN186765 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument jaasContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  ' cannot be specified with multiple login modules in the JAAS context. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  ' must be configured to override mechanism-specific configs.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00001] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.LoginMetadata.equals@POLYN189677 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.LoginMetadata.equals@POLYN189677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.common.security.authenticator.LoginManager.LoginMetadata.equals@POLYN189677 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/LoginManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
